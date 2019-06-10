import { Component, Input } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {  NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="cardClick()" [ngClass]="{'off': !on}">     
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() device: string;
  @Input() messageOn: string;
  @Input() messageOff: string;
  @Input() on = true;
  //@Input() ShowLess= false;
  data = {
    id: "",
    message :  ""
  };

  constructor(
    private service:BackendService,
    private authService: NbAuthService
    ) { }

  cardClick(){
    console.log(this.device);
    this.data.id = this.device;
    if(this.on)  this.data.message = this.messageOn;
    else this.data.message = this.messageOff;
    this.service.signalEsp(this.data).subscribe(() => {});    
    this.on = !this.on;
  }

  /*
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
  */
}
