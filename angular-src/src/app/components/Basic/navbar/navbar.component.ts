import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {UtilityService} from '../../../services/utility.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  constructor(
    public authService:AuthService, 
    private flashMessage:UtilityService,
    private router:Router,
    ) { }

  ngOnInit() { 
   // if(this.authService.loggedIn) this.authService.getProfile();
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.subj_notification.next('You are now logged out');
    this.router.navigate(['/login']);
    return false;
  }

  toggleNavbar() {   
    this.navbarOpen = !this.navbarOpen;
  }
  TurnLedOnOROFF(){
    console.log("start led");
    const Http = new XMLHttpRequest();
    const url2='http://192.168.1.33:301/OFF1';
    const url='http://feronimus.myftp.org:6565';
    Http.open("GET", url2);
    Http.send();
    Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
    }
  }

 
}
