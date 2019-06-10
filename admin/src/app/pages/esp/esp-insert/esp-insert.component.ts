import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {ValidationService } from '../../services/validation.service';
import { v4 as uuid } from 'uuid';
import {  NbAuthService } from '@nebular/auth';
import '../../editors/ckeditor/ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-esp-insert',
  templateUrl: './esp-insert.component.html',
  styleUrls: ['./esp-insert.component.scss']
})
export class EspInsertComponent implements OnInit  {
  //Field Device
  name;
  description;
  secret;
  
  //Messages
  errors: string[] = [];
  messages: string[] = [];

  //New Device 
  FocusedID: any;
  devices =[];
  FocusedDevice: any;  
  isNew = true;
  HtmlMessages = {
    CardDeviceHeader : "",
    ButtonSubmit: "",
  };

  //Cashed
  GroupList;
  selectGroup;
  DeviceList;  
  selectDevice;
  FocusedFirmware;



  ngOnInit() {
    this.FocusedID  = this.service.FocusedDeviceID;
    if(!(this.FocusedID == undefined) && !(this.FocusedID == "") ) this.isNew= false;    
    if(!this.isNew) this.handleChange();
    else this.handleHtmlChange();   
    
    //Load Cashed data from the server
    this.LoadLists();
  }

  constructor(
    private service:BackendService,
    private validationService:ValidationService,
    private authService: NbAuthService
    ) {}
  
    handleChange(){
      this.service.getEspByUser().subscribe(esps => {        
        esps.esps.esp.forEach(element => {
          this.devices.push(element);
          if(this.FocusedID == element._id) this.FocusedDevice = element;
        });

        this.name = this.FocusedDevice.name;
        this.description = this.FocusedDevice.description;
        this.secret = this.FocusedDevice.secret;
        // Get firmwares and find the one 
        this.service.getFirmwareById({_id:this.FocusedDevice.firmware}).subscribe(firmware => { 
          this.SelectedFirmware(firmware.firmware);
         });
        this.handleHtmlChange();
      });
    }
    handleHtmlChange(){
    
      if(this.isNew){
        this.HtmlMessages.CardDeviceHeader = "Insert a New Smart Device!";
        this.HtmlMessages.ButtonSubmit = "Save New Device";
      }else{
        this.HtmlMessages.CardDeviceHeader = "Update Smart Device " + this.FocusedDevice.name;
        this.HtmlMessages.ButtonSubmit = "Update Device";
      }     
    }


  RandomizeSecret(){   
    this.secret = uuid();    
  }
  
  onSubmit() {
    this.ClearMessages()
    let esp = this.CreateNewEsp();
    if(!this.validationService.validateRegisterESP(esp)) {
      this.errors = this.validationService.pickErrorsRegisterEsp(esp);
      return; 
    }    

    if(this.isNew){
      this.service.registerEsp(esp).subscribe( (msg) => {
        if(msg.success) this.messages.push(msg.msg);
        else this.errors.push(msg.msg);
        },
        err => {
          this.errors.push(err);
          //console.log(err);
          return false;
        }
      );
    }else{
      this.service.updateEsp(esp).subscribe( (msg) => {
        if(msg.success) this.messages.push(msg.msg);
        else this.errors.push(msg.msg);
        },
        err => {
          this.errors.push(err);
          //console.log(err);
          return false;
        }
      );
    }
    
  }

  CreateNewEsp() : any{
    //FocusedFirmware

    let  esp; 
    esp = {
      name: this.name,
      description: this.description,
      secret: this.secret,
      owner: this.GetUserID(),
      group: "",
      firmware: "none"
    }
    if(this.FocusedFirmware)esp.firmware = this.FocusedFirmware._id;
    if(!this.isNew)esp._id = this.FocusedDevice._id;
    return esp;
  }

  ClearMessages(){
    this.errors = [];
    this.messages = [];
  }
  GetUserID(){
    let token: any;
    token=  this.authService.getToken();    
    return  token.value.payload.user.id;
  }

  LoadLists(){
    //load groups
    this.service.getFirmwareGroups({_id: this.GetUserID()}).subscribe(groups => { 
      this.GroupList = [{}]; 
     // this.GroupArray = [];
      let tempGroups   = groups.groups;  
      tempGroups.forEach(groupItem => { 
        let groupObject; 
        //this.GroupArray.push(groupItem);
       groupObject = {'group' :groupItem};
        this.service.getFirmwareGroupNames({_id: this.GetUserID(), group:groupItem}).subscribe(nameItems => {         
         
        
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
  SelectGroupName(groupItem : any, nameItem: any){
    //load devices
    //this.IsNewFirmware=false;
    this.service.getFirmwareGroupNameDevices({_id: this.GetUserID(),group : groupItem, name : nameItem}).subscribe(devices => { 
      this.DeviceList = [{}]; 
     // this.DeviceArray = [{}];       
      let tempGroups   = devices.devices; 
      tempGroups.forEach(deviceItem => { 
        //this.DeviceArray.push(deviceItem);
        let groupObject; 
       groupObject = {'device' :deviceItem};
        this.service.getFirmwareGroupNameDeviceVersions({_id: this.GetUserID(),group : groupItem , name : nameItem , device : deviceItem}).subscribe(versionItems => {         
         
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
  SelectedFirmware(firmware :any){
    this.FocusedFirmware = firmware;
    this.selectGroup = firmware.name;
    this.selectDevice= firmware.device;
  }
}
