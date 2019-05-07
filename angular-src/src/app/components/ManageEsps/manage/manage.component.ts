import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ValidateService} from '../../../services/validate.service'
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
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
  
  constructor(
    private flashMessage:FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private validateService: ValidateService) { }
    user;

  ngOnInit() {
    //load esps 
    this.UpdateEsoList();
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });

  }
  
  UpdateEsoList(){
    this.authService.getEspByUser().subscribe(esps => {
      this.EspList = esps.esps.esp ;
      
    },
    err => {
      console.log(err);
      return false;
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
    let  esp;    

    esp = {
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
      version: "",
      softwareURL : ""
    }
   
   
    //If its not new add the id 
    if(!this.isNew)esp._id =  this.focusedESP._id;
    
    //Required Fields
    if(!this.validateService.validateRegisterESP(esp)){
      this.flashMessage.show('Please fill in all fields.',{cssClass: 'alert-danger', timeout: 3000});
      return false;
    }      
      //Register User
        this.authService.registerEsp(esp).subscribe(data => {
          if(data.success){
            this.flashMessage.show(data.msg,{cssClass: 'alert-success', timeout: 3000});
            //this.router.navigate(['/dashboard']);
            this.UpdateEsoList();
          }else{
            this.flashMessage.show(data.msg,{cssClass: 'alert-danger', timeout: 3000});
            //this.router.navigate(['/dashboard']);
            this.UpdateEsoList();
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

}
