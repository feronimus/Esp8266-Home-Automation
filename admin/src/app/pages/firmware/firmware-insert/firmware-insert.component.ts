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



export  interface  Firm  {
  name: String;
  description: String;
  version: { main:Number , secondary: Number};
  isPublic: Boolean;
  link: String;
  group: String;
  device: String;
  code: String;
  ownerName: String;
  owner: String;
  buttons: [{ messageOn: String,  messageOff: String , icon: String, buttonType: String}];
  Sliders: [{ Name: String, message: String , value : Number }];
};


@Component({
  selector: 'ngx-firmware-insert',
  templateUrl: './firmware-insert.component.html',
  styleUrls: ['./firmware-insert.component.scss']
})
export class FirmwareInsertComponent implements OnInit {


  
   //Fields Firmware
   newFirmware= <Firm>{ };
   UpdatedFirmware : any;
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
   Sliders= [{ Name: String, message: String , value : Number }];;
   

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
    this.service.getFirmwareByUser().subscribe(firm => {        
      firm.firmware.forEach(element => {
        this.firms.push(element);
        if(this.FocusedID == element._id) this.FocusedFirmwares = element;        
      });

      this.name = this.FocusedFirmwares.name;
      this.description = this.FocusedFirmwares.description;
      this.link = this.FocusedFirmwares.link;
      this.group = this.FocusedFirmwares.group;
      this.device = this.FocusedFirmwares.device;
      this.version = this.FocusedFirmwares.version;
      this.isPublic = this.FocusedFirmwares.isPublic;
      this.code = this.FocusedFirmwares.code;
      this.source.load(this.FocusedFirmwares.buttons);
      /*
      this.FocusedFirmwares.buttons.forEach(element => {   
        console.log(element)  ;  
        this.source.add(element);
      });
      */
      console.log(this.source)  ; 
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
   

  CreateNewFirmware(){
  this.newFirmware.name =  this.name;
  this.newFirmware.description = this.description;
  this.newFirmware.version = { main: this.version.main , secondary: this.version.secondary};
  this.newFirmware.isPublic = this.isPublic;
  this.newFirmware.link =this.link;
  this.newFirmware.group =this.group;
  this.newFirmware.device =this.device;
  this.newFirmware.code = this.code;
  this.newFirmware.owner = this.GetUserID();

  this.newFirmware.buttons = [{
    messageOn: "test",
    messageOff: "test",
    icon: "test",
    buttonType: "test",
  }];
  this.newFirmware.buttons.shift();
  this.source.getAll().then(dat =>{      
    if(dat) {
      dat.forEach(element => {
          let temp = {
            messageOn: element.messageOn, 
            messageOff: element.messageOff , 
            icon: element.icon, 
            buttonType: element.type
        };
        this.newFirmware.buttons.push(temp);
      });
    }
  });    
  }

  UpdateFirmware(){
    this.UpdatedFirmware =  this.FocusedFirmwares;
    this.UpdatedFirmware.name =  this.name;
    this.UpdatedFirmware.description = this.description;
    this.UpdatedFirmware.version = { main: this.version.main , secondary: this.version.secondary};
    this.UpdatedFirmware.isPublic = this.isPublic;
    this.UpdatedFirmware.link =this.link;
    this.UpdatedFirmware.group =this.group;
    this.UpdatedFirmware.device =this.device;
    this.UpdatedFirmware.code = this.code;
    this.UpdatedFirmware.owner = this.GetUserID();
  
    this.UpdatedFirmware.buttons = [{
      messageOn: "test",
      messageOff: "test",
      icon: "test",
      buttonType: "test",
    }];
    this.UpdatedFirmware.buttons.shift();
    this.source.getAll().then(dat =>{      
      if(dat) {
        dat.forEach(element => {
            let temp = {
              messageOn: element.messageOn, 
              messageOff: element.messageOff , 
              icon: element.icon, 
              buttonType: element.type
          };
          this.UpdatedFirmware.buttons.push(temp);
        });
      }
    });    
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
      this.messages = [];
      this.errors = [];
      if(this.isNew) {
        this.handleSumbitNew();
      }
      else {
        this.handleSumbitOld();
      }
    }


    async  handleSumbitNew(){  
      await this.CreateNewFirmware();       
      if(!this.validationService.validateRegisterFirmware(this.newFirmware)) {
        this.errors = this.validationService.pickErrorsRegisterFirmware(this.newFirmware);
        return; 
      }        
      this.service.registerFirmware(this.newFirmware).subscribe( (msg) => {
        if(msg.success) this.messages.push(msg.msg);
        else this.errors.push(msg.msg);
      },
      err => {
        this.errors.push(err);
        //console.log(err);
        return false;
      });
    }

    async  handleSumbitOld(){  
      await this.UpdateFirmware();         
      if(!this.validationService.validateRegisterFirmware(this.UpdatedFirmware)) {
        this.errors = this.validationService.pickErrorsRegisterFirmware(this.UpdatedFirmware);
        return; 
      }         
      this.service.updateFirmware(this.UpdatedFirmware).subscribe( (msg) => {
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
