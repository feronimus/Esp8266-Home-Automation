import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {UtilityService} from '../../../services/utility.service';
import {Router} from '@angular/router';
import {ValidateService} from '../../../services/validate.service';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';


var uri = 'esp/espuploads';
@Component({
  selector: 'app-esp-setup',
  templateUrl: './esp-setup.component.html',
  styleUrls: ['./esp-setup.component.css']
})



export class EspSetupComponent implements OnInit {
  name: String;
  description: String;
  secret: String;
  group: String;
  D0=false;
  D1=false;
  D2=false;
  D3=false;
  D4=false;
  D5=false;
  D6=false;
  D7=false;
  D8=false;
  D9=false;
  D10=false;
  A0=false;
  isNew=true;
  focusedESP;
  EspList;

  //firmware
  selectGroup;
  selectDevice;

  focusedFirmware;
  firmName;
  firmDescription;
  firmVersionMain;
  firmVersionSecondary;
  firmisPublic;
  firmLink;
  firmGroup;
  firmDevice;
  IsOwner =true; //To be checked on start 
  IsNewFirmware = true; 

  ForceUpdate = false;

  GroupList;
  DeviceList;


  uploader:FileUploader = new FileUploader({
    url:uri,
    allowedMimeType: ['application/octet-stream'] ,  
    queueLimit: 2
  });
  attachmentList:any = [];

  constructor(
    private flashMessage:UtilityService,
    private authService: AuthService,
    private router: Router,
    private validateService: ValidateService) { 
      
      this.uploader.onAfterAddingFile = (file) => {  file.withCredentials = false; this.onAfterAddingFile(file);};

      this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
          this.attachmentList.push(JSON.parse(response));
          this.firmLink = "https://mqtt.antallaktika-smart.gr/uploads/" + response.uploadname;
      }
    }
    user;

    onAfterAddingFile(fileItem: any) {
      let latestFile = this.uploader.queue[this.uploader.queue.length-1]
      this.uploader.queue = []; 
      this.uploader.queue.push(latestFile);
   } 
  ngOnInit() {
    //load esps 
    this.LoadLists();
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });

    

    
  }
  LoadLists(){
    this.authService.getEspByUser().subscribe(esps => {
      this.EspList = esps.esps.esp ;
      
    },
    err => {
      console.log(err);
      return false;
    });

    //load groups
    this.authService.getFirmwareGroups().subscribe(groups => { 
      this.GroupList = [{}]; 
      let tempGroups   = groups.groups;  
      tempGroups.forEach(groupItem => { 
      let groupObject; 
       groupObject = {'group' :groupItem};
        this.authService.getFirmwareGroupNames({group:groupItem}).subscribe(nameItems => {         
         
        
          groupObject['names'] = [{}];
          nameItems.names.forEach(nameitem =>{
            groupObject['names'].push({'name' : nameitem, 'group' :groupItem }) ;
          });
          groupObject['names'].shift();         
      });
      this.GroupList.push(groupObject);
      });
      this.GroupList.shift();
    });
    
    
  }

 ChangeFocusEsp(esp){
   this.isNew=false;
   this.focusedESP = esp; 
   this.name = this.focusedESP.name;   
   this.secret = this.focusedESP.secret;   
   this.description = this.focusedESP.description;
   this.D0 = this.focusedESP.pins.D0.InUse;
   this.D1 = this.focusedESP.pins.D1.InUse;
   this.D2 = this.focusedESP.pins.D2.InUse;
   this.D3 = this.focusedESP.pins.D3.InUse;
   this.D4 = this.focusedESP.pins.D4.InUse;
   this.D5 = this.focusedESP.pins.D5.InUse;
   this.D6 = this.focusedESP.pins.D6.InUse;
   this.D7 = this.focusedESP.pins.D7.InUse;
   this.D8 = this.focusedESP.pins.D8.InUse;
   this.D9 = this.focusedESP.pins.D9.InUse;
   this.D10 = this.focusedESP.pins.D10.InUse;
   this.A0 = this.focusedESP.pins.A0.InUse;
   
 }

  //add esp

  onESPSubmit(){
    //check if secret already exists
    console.log("inside sumbit");
    let  esp = {
      _id:"",
      name: this.name,
      description: this.description,
      secret: this.secret,
      pins : {
        D0: this.D0,
        D1: this.D1,
        D2: this.D2,
        D3: this.D3,
        D4: this.D4,
        D5: this.D5,
        D6: this.D6,
        D7: this.D7,
        D8: this.D8,
        D9: this.D9,
        D10: this.D10,
        A0: this.A0
      },      
      owner: this.user._id,
      isOnline: 0,
      viewOrder: -1,
      group: "",
      eventSheduler: { },//event object
      timer: -1,
      version: "", //to be removed
      forceUpdate : false 
    }
   
   
    //If its not new add the id 
    if(!this.isNew)esp._id =  this.focusedESP._id;
    
    //Required Fields
    if(!this.validateService.validateRegisterESP(esp)){
      this.flashMessage.subj_notification.next('Please fill in all fields.');
      return false;
    }      
      //Register User
        this.authService.registerEsp(esp).subscribe(data => {
          if(data.success){
            this.flashMessage.subj_notification.next(data.msg);
            //this.router.navigate(['/dashboard']);

            //Saveor update Firmware 
            
            this.authService.getEspByUser().subscribe(esps => {
              esps.esps.esp.forEach(userEsp => {
                //console.log(userEsp);
                if(userEsp.secret == esp.secret) {

                let  firmware = {
                  _id: "",
                  name: this.firmName,
                  description: this.firmDescription,
                  version: { main: this.firmVersionMain,  secondary: this.firmVersionSecondary},
                  isPublic: this.firmisPublic  ,      
                  owner: this.user._id,
                  link: this.firmLink,
                  group: this.firmGroup,
                  device: this.firmDevice,
                  esp: userEsp
                }  
                if(this.IsNewFirmware){
                  //register
                  this.authService.registerFirmware(firmware).subscribe(data => {
                    if(data.success){
                      this.flashMessage.subj_notification.next(data.msg); }else{
                        this.flashMessage.subj_notification.next(data.msg);
                        //this.router.navigate(['/dashboard']);
                        this.LoadLists();
                      }
                    });
    
                }else{
                  //update
                  firmware._id = this.focusedFirmware._id;
                  this.authService.updateFirmware(firmware).subscribe(data => {
                    if(data.success){
                      this.flashMessage.subj_notification.next(data.msg); }else{
                        this.flashMessage.subj_notification.next(data.msg);
                        //this.router.navigate(['/dashboard']);
                        this.LoadLists();
                      }
                    });
    
                }
                this.LoadLists();
                this.CreateNewEsp();
                this.CreateNewFirmware()
              }
              });
            
            });
            this.LoadLists();
          }else{
            this.flashMessage.subj_notification.next(data.msg);
            //this.router.navigate(['/dashboard']);
            this.LoadLists();
          }
        });
  }
     
  CreateNewEsp(){
    this.isNew=true;
    this.focusedESP = undefined;  
    this.name = undefined;   
    this.secret = undefined;   
    this.description = undefined;
    this.D0 = false;
    this.D1 = false;
    this.D2 = false;
    this.D3 = false;
    this.D4 = false;
    this.D5 = false;
    this.D6 = false;
    this.D7 = false;
    this.D8 = false;
    this.D9 = false;
    this.D10 = false;
    this.A0 = false;
  }



  SelectGroupName(groupItem : any, nameItem: any){
    //load devices
    this.IsNewFirmware=false;
    this.authService.getFirmwareGroupNameDevices({group : groupItem, name : nameItem}).subscribe(devices => { 
      this.DeviceList = [{}]; 
      let tempGroups   = devices.devices; 
      tempGroups.forEach(deviceItem => { 
      let groupObject; 
       groupObject = {'device' :deviceItem};
        this.authService.getFirmwareGroupNameDeviceVersions({group : groupItem , name : nameItem , device : deviceItem}).subscribe(versionItems => {         
         
          groupObject['versions'] = [{}];
          versionItems.verions.forEach(versiontem =>{
            groupObject['versions'].push({'firmware' : versiontem, 'device' :deviceItem }) ;
          });
          groupObject['versions'].shift();         
      });
      this.DeviceList.push(groupObject);
      });
      this.DeviceList.shift(); 

    });
  }

  SelectedFirmware(firmwre :any){
    this.IsNewFirmware=false;
    console.log(firmwre.owner);
    if(firmwre.owner == this.user._id)this.IsOwner =true;
    else this.IsOwner =false;
    this.firmName = firmwre.name;
    this.firmDescription= firmwre.description;
    this.firmVersionMain= firmwre.version.main;
    this.firmVersionSecondary= firmwre.version.secondary;
    this.firmisPublic = firmwre.isPublic;
    this.firmLink = firmwre.link;
    this.firmGroup = firmwre.group;
    this.firmDevice = firmwre.device;
    this.focusedFirmware =firmwre;
    
  }
  CreateNewFirmware(){
    this.IsOwner=true;
    this.IsNewFirmware=true;
    this.firmName = undefined;  
    this.firmDescription = undefined;   
    this.firmVersionMain = undefined;   
    this.firmVersionSecondary = undefined;
    this.firmisPublic = false;
    this.firmLink = undefined;
    this.firmGroup = undefined;
    this.firmDevice = undefined;
    this.selectGroup = undefined;
    this.selectDevice = undefined;
  }
}
