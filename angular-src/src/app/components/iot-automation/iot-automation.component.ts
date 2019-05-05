import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-iot-automation',
  templateUrl: './iot-automation.component.html',
  styleUrls: ['./iot-automation.component.css']
})
export class IotAutomationComponent implements OnInit {

  EspList;
  //value = false;
  
  constructor(
    private flashMessage:FlashMessagesService,
    private authService: AuthService
    ) { }

/*
changeView(){
  this.value = !this.value;
}

*/


  ngOnInit() {
    this.UpdateEsoList();
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
  public eventOnChange(object){   
    this.EspList.forEach(esp => { 
    if(esp._id == object.espItem._id) {
      esp[object.key].value = object.value.value; 
      this.authService.updateEsp(esp).subscribe(data => {
        if(data.success){
          this.UpdateEsoListValues();
        }else{
          this.UpdateEsoListValues();
        }
      });
    }

  });
  }

  UpdateEsoListValues(){
    this.authService.getEspByUser().subscribe(esps => {

      //for each change values
      this.EspList.forEach((part, index, theArray)=>{        
        theArray[index].D0.IsHight = esps.esps.esp[index].D0.IsHight;
        theArray[index].D1.IsHight = esps.esps.esp[index].D1.IsHight;
        theArray[index].D2.IsHight = esps.esps.esp[index].D2.IsHight;
        theArray[index].D3.IsHight = esps.esps.esp[index].D3.IsHight;
        theArray[index].D4.IsHight = esps.esps.esp[index].D4.IsHight;
        theArray[index].D5.IsHight = esps.esps.esp[index].D5.IsHight;
        theArray[index].D6.IsHight = esps.esps.esp[index].D6.IsHight;
        theArray[index].D7.IsHight = esps.esps.esp[index].D7.IsHight;
        theArray[index].D8.IsHight = esps.esps.esp[index].D8.IsHight;
        theArray[index].D9.IsHight = esps.esps.esp[index].D9.IsHight;
        theArray[index].D10.IsHight = esps.esps.esp[index].D10.IsHight;
        theArray[index].A0.value = esps.esps.esp[index].A0.value;
      });
      //this.EspList = esps.esps.esp ;      
    },
    err => {
      console.log(err);
      return false;
    });
  }

  public eventOnClick(object){     
    this.EspList.forEach(esp => {
      if(esp._id == object.espItem._id) {
        esp[object.key].IsHight = object.value;        
        this.authService.updateEsp(esp).subscribe(data => {
          if(data.success){
            this.UpdateEsoListValues();
          }else{
            this.UpdateEsoListValues();
          }
        });
      }

    });
  }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
 
}
