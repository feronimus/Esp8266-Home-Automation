import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {ValidationService } from '../../services/validation.service';
import {  NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { group } from '@angular/animations';
import '../../editors/ckeditor/ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-firmware-insert',
  templateUrl: './firmware-insert.component.html',
  styleUrls: ['./firmware-insert.component.scss']
})
export class FirmwareInsertComponent implements OnInit {

 
   //Fields Firmware
   name= "";
   description= "";
   version= { main:0 , secondary: 0};
   isPublic= true;
   link= "";
   group= "";
   device= "";
   code= "";
   owner: any;
   buttons= [{Name: "", message: "" }];
   Sliders= [{Name: "", message: 0 }];

   //Messages
   errors: string[] = [];
    messages: string[] = [];
 

  //Cashed
  GroupList;
  GroupArray = [];
  DeviceList;  
  DeviceArray = [];
  //UserID;
  // New Firware
   FocusedID: any;
   firms =[];
   FocusedFirmwares: any;  
   source: LocalDataSource = new LocalDataSource();
 
   isNew = true;
   HtmlMessages = {
     CardDeviceHeader : "",
     ButtonSubmit: "",
   };
   colorTypes = [
    { value: 'primary', title: 'primary' },
    { value: 'warning', title: 'warning' }, 
    { value: 'success', title: 'success'},
    { value: 'info', title: 'info'},
    { value: 'danger', title: 'danger'},
    { value: 'ghost', title: 'ghost'},
  
  ];

  constructor(
    private service:BackendService,
    private validationService:ValidationService,
    private authService: NbAuthService
    ) {}


  ngOnInit() {    

    //Get Focused ID of Firmware and load it 
    this.FocusedID  = this.service.FocusedFirmwareID;
    if(!(this.FocusedID == undefined) && !(this.FocusedID == "") ) this.isNew= false;    
    if(!this.isNew) this.handleChange();
    else this.handleHtmlChange(); 
    
    //Load Cashed data from the server
    this.LoadLists();
   
    
  }
  handleChange(){
    this.service.getEspByUser().subscribe(esps => {        
      esps.esps.esp.forEach(element => {
        this.firms.push(element);
        if(this.FocusedID == element._id) this.FocusedFirmwares = element;
      });

      this.name = this.FocusedFirmwares.name;
      this.description = this.FocusedFirmwares.description;


      this.handleHtmlChange();
    });
  }
  handleHtmlChange(){
  
    if(this.isNew){
      this.HtmlMessages.CardDeviceHeader = "Insert a New Firmware!";
      this.HtmlMessages.ButtonSubmit = "Save This Firmware";
    }else{
      this.HtmlMessages.CardDeviceHeader = "Update Firmware " + this.FocusedFirmwares.name;
      this.HtmlMessages.ButtonSubmit = "Update Firmware";
    }   
  }

 
  

  CreateNewFirmware() : any{
    
    let  firmware; 
    firmware = {
      name: this.name,
      description: this.description,
      version: { main: this.version.main , secondary: this.version.secondary},
      isPublic: this.isPublic,
      link: this.link,
      group: this.group,
      device: this.device,
      code: this.code,
      owner: this.GetUserID(),

      buttons: [{ messageOn: "",  messageOff: "" , icon: "", buttonType: ""}],
    
    Sliders: [{Name: "", message: "" , value : 22 }]
      
     
    }
    
    firmware.buttons.shift();
    this.source.getAll().then(dat =>{      
      if(dat) {
        dat.forEach(element => {
            let temp = {
              messageOn: element.messageOn, 
              messageOff: element.messageOff , 
              icon: element.icon, 
              buttonType: element.type
          };
          firmware.buttons.push(temp);
        });
      }
    });
    
    //console.log(firmware); 
    return firmware;
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
      this.GroupArray = [];
      this.DeviceArray = [{}];  
      this.GroupArray = groups.groups;
      this.service.getDevices().subscribe(devices => {    
        this.DeviceArray = devices.devices;      
      });
    });
  }

  //Create a single big entity with the tree of all to visualize ina tree
  /*
  SelectGroupName(groupItem : any, nameItem: any){
    //load devices
    //this.IsNewFirmware=false;
    this.service.getFirmwareGroupNameDevices({_id: this.GetUserID(),group : groupItem, name : nameItem}).subscribe(devices => { 
      this.DeviceList = [{}]; 
      this.DeviceArray = [{}];       
      let tempGroups   = devices.devices; 
      tempGroups.forEach(deviceItem => { 
        this.DeviceArray.push(deviceItem);
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
*/
  
  searchCategory = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.GroupArray.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


    searchDevice = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.DeviceArray.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

    onSubmit() {
      this.ClearMessages()
      let firmware = this.CreateNewFirmware();
      if(!this.validationService.validateRegisterFirmware(firmware)) {
        this.errors = this.validationService.pickErrorsRegisterFirmware(firmware);
        return; 
      }    
      console.log(firmware);
      this.service.registerFirmware(firmware).subscribe( (msg) => {
        if(msg.success) this.messages.push(msg.msg);
        else this.errors.push(msg.msg);
      },
      err => {
        this.errors.push(err);
        //console.log(err);
        return false;
      });
    }
    onDeleteConfirm(event): void {
      if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve();
      } else {
        event.confirm.reject();
      }
    }
    test(){
      this.source.getAll().then(res =>{
        console.log(res); 
      });
    }
    

    

    settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: {
        messageOn: {
          title: 'Message At On',
          type: 'string',
        },
        messageOff: {
          title: 'Message At Off',
          type: 'string',
        },
        icon: {
          title: 'Icon #',
          type: 'string',
        },
        type: {
          title: 'Color type',
          type: 'html', 
          editor: {
            type: 'list',
            config: { 
              list:this.colorTypes,
              
            }, 
           },
          }, 
      }
    }
}
