import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-name-prompt',
  templateUrl: 'dialog-name-prompt.component.html',
  styleUrls: ['dialog-name-prompt.component.scss'],
})
export class DialogNamePromptComponent {

  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>) {}

  selectedMoment =  new Date(new Date().getTime() + 60000 );
  // Min moment: February 12 2018, 10:30
  public min =  new Date(new Date().getTime() + 60000 );
  Turn = "ON";
  Repeat = "0";
  selectedTime = new Date();
  days = [
    { title: "Monday", value :1 , chosen: false},
    { title: "Tuesday", value :2 , chosen: false},
    { title: "Wednesday", value :3 , chosen: false},
    { title: "Thursday", value :4 , chosen: false},
    { title: "Friday", value :5 , chosen: false},
    { title: "Saturday", value :6 , chosen: false},
    { title: "Sunday", value :0 , chosen: false},
  ];

  months = [
    { title: "January", value :0 , chosen: false},
    { title: "February", value :1 , chosen: false},
    { title: "March", value :2 , chosen: false},
    { title: "April", value :3 , chosen: false},
    { title: "May", value :4 , chosen: false},
    { title: "June", value :5 , chosen: false},
    { title: "July", value :6 , chosen: false},
    { title: "August", value :7 , chosen: false},
    { title: "September", value :8 , chosen: false},
    { title: "October", value :9 , chosen: false},
    { title: "November", value :10 , chosen: false},
    { title: "December", value :11 , chosen: false},
  ];

  cancel() {
    this.ref.close();
  }

  submit1() {
    let data = {
      deviceID :"",
      date : this.selectedMoment,
      message : this.Turn,
      repeat: false,
      buttonID : ""
    };
    this.ref.close(data);
  }
  submit2() {
    let temp = new Date(this.selectedTime);
    console.log(temp.getHours());
    console.log(temp.getMinutes());

    let dayArray = [];
    this.days.forEach(d => {
      if(d.chosen) dayArray.push(d.value);
    });

    let monthArray = [];
    this.months.forEach(m => {
      if(m.chosen) monthArray.push(m.value);
    });

    let data = {
      deviceID :"",
      month :  monthArray ,
      dayOfWeek:  dayArray ,
      hour : temp.getHours(), 
      minute : temp.getMinutes()  ,
      message : this.Turn,
      repeat: true,
      buttonID : ""
    };
    this.ref.close(data);
  }

  AllDays(){
    this.days.forEach(d => {
      d.chosen = true;
    });
  }

  on = true;
  cardClick(){
    this.on = !this.on;
  }
}
