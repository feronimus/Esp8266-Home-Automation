import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {UtilityService} from './services/utility.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    private notificationService: UtilityService,
    private snackBar : MatSnackBar
  ) {
    this.notificationService.subj_notification.subscribe(message => {
      this.snackBar.open(message,'',{
        duration: 2000,
      });
    });
  }


  title = 'angular-src';

  openSnackBar(message: string, action: string , duration : number) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }
}
