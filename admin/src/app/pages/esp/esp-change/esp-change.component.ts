import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'ngx-esp-change',
  templateUrl: './esp-change.component.html',
  styleUrls: ['./esp-change.component.scss']
})
export class EspChangeComponent {

  focusedDevice : any;
  source = [];

  constructor(private service: BackendService) 
  {    
    this.service.getEspByUser().subscribe(esps => {      
      esps.esps.esp.forEach(element => {
        this.source.push(element);
       // if(this.service.getFocusedDevice() == element._id) this.focusedDevice = element;
      });
    });
  };

  

}
