import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import {BackendService} from '../services/backend.service';
import {  NbAuthService } from '@nebular/auth';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  device :string;
  messageOn :string;
  messageOff :string;
  button_ID : string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements  OnInit {

  //variable []
  statusCards = [];
  constructor(
    private service:BackendService,
    private authService: NbAuthService
    ) { }

    


  ngOnInit() {    
    this.service.getEspByUser().subscribe(esps => {
      esps.esps.esp.forEach(device => {
        this.service.getFirmwareById({ _id : device.firmware}).subscribe(firmware => {         
          firmware.firmware.buttons.forEach(button =>{
            device.buttons.forEach(devButton => {
              if(devButton.id == button._id){
                let temp: CardSettings = {
                  title: devButton.title,
                  iconClass: button.icon,
                  type: button.buttonType,
                  device: device._id,
                  messageOn : button.messageOn,
                  messageOff : button.messageOff, 
                  button_ID  : button._id,
                };            
                this.statusCards.push(temp); 
              }
            });
          });
        });
      });
     });
  }
}
