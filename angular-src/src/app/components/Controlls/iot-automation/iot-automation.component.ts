import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UtilityService} from '../../../services/utility.service';

@Component({
  selector: 'app-iot-automation',
  templateUrl: './iot-automation.component.html',
  styleUrls: ['./iot-automation.component.css']
})
export class IotAutomationComponent implements OnInit {

  EspList;
  //value = false;
  //---


  constructor(
    private flashMessage:UtilityService,
    private authService: AuthService,
    ){   
      setInterval(()=> { this.UpdateEspListValues() }, 1000);  
    }

    
  ngOnInit() {    
    this.UpdateEspList();  
    
    
  }
  //ngOnDestroy() {
   // clearInterval(this.intervalId);
  //}



  UpdateEspList(){
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
     
      esp.pins[object.key].value = object.value.value; 
     
      this.authService.updateEsp(esp).subscribe(data => {
        if(data.success){
          this.UpdateEspListValues();
        }else{
          this.UpdateEspListValues();
        }
      });
    }

  });
  }

  public eventOnClick(object){    
   
    this.EspList.forEach(esp => {
      if(esp._id == object.espItem._id) {
        esp.pins[object.key].IsHight = object.value;        
        this.authService.updateEsp(esp).subscribe(data => {
          if(data.success){
            this.UpdateEspListValues();
          }else{
            this.UpdateEspListValues();
          }
        });
      }

    });
  }

   
    UpdateEspListValues(){
      
    this.authService.getEspByUser().subscribe(esps => {

      if(!this.EspList)return;
     
      //for each change values
      this.EspList.forEach((part, index, theArray)=>{        
        theArray[index].pins.D0.IsHight = esps.esps.esp[index].pins.D0.IsHight;
        theArray[index].pins.D1.IsHight = esps.esps.esp[index].pins.D1.IsHight;
        theArray[index].pins.D2.IsHight = esps.esps.esp[index].pins.D2.IsHight;
        theArray[index].pins.D3.IsHight = esps.esps.esp[index].pins.D3.IsHight;
        theArray[index].pins.D4.IsHight = esps.esps.esp[index].pins.D4.IsHight;
        theArray[index].pins.D5.IsHight = esps.esps.esp[index].pins.D5.IsHight;
        theArray[index].pins.D6.IsHight = esps.esps.esp[index].pins.D6.IsHight;
        theArray[index].pins.D7.IsHight = esps.esps.esp[index].pins.D7.IsHight;
        theArray[index].pins.D8.IsHight = esps.esps.esp[index].pins.D8.IsHight;
        theArray[index].pins.D9.IsHight = esps.esps.esp[index].pins.D9.IsHight;
        theArray[index].pins.D10.IsHight = esps.esps.esp[index].pins.D10.IsHight;
        theArray[index].pins.A0.value = esps.esps.esp[index].pins.A0.value;
        theArray[index].isOnline = esps.esps.esp[index].isOnline;


      });
      //this.EspList = esps.esps.esp ;
      return true;      
    },
    err => {
      console.log(err);
      return false;
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
 
  isOnlineNow(oldTime: number){
    var d = new Date();
    var t= d.getTime()/1000;
    //console.log(t-oldTime + 8);
    if(oldTime + 8 > t ) return true;
    else return false;
  }
  
}




