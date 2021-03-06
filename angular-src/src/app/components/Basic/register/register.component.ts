import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../../services/validate.service';
import {AuthService} from '../../../services/auth.service';
import {UtilityService} from '../../../services/utility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;


  constructor(
    private validateService: ValidateService, 
    private flashMessage:UtilityService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    //Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.subj_notification.next('Please fill in all fields');
      return false;
    }

      //Validate Email
      if(!this.validateService.validateEmail(user.email)){
        this.flashMessage.subj_notification.next('Please use a valid email');
        return false;
      }

      
      //Register User
        this.authService.registerUser(user).subscribe(data => {
          if(data.success){
            this.flashMessage.subj_notification.next(data.msg);
            this.router.navigate(['/login']);
          }else{
            this.flashMessage.subj_notification.next(data.msg);
            this.router.navigate(['/register']);
          }
        });
      }
     
  
}
