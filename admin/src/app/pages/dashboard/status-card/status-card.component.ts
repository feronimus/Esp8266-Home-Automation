import { Component, Input } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {  NbAuthService } from '@nebular/auth';
import {  NbDialogService } from '@nebular/theme';
import { DialogNamePromptComponent } from './dialog-name-prompt/dialog-name-prompt.component';

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



      <div class="actions">
        <a nbButton size="large" hero          
        class="buttonCard icon {{ type }}"
        (click)="openDialog()">
        <i class="fas fa-clock"></i>
        </a>
      </div>
      
    </nb-card>

    

  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() device: string;
  @Input() button_ID:string
  @Input() messageOn: string;
  @Input() messageOff: string;
  @Input() on = true;
  //@Input() ShowLess= false;
  flag=false;
  data = {
    id: "",
    message :  "",
    status : "",
    buttonID: ""
  };

  constructor(
    private service:BackendService,
    private dialogService: NbDialogService,
    private authService: NbAuthService,
    ) { }

    openDialog() {
      this.flag=true;
      this.dialogService.open(DialogNamePromptComponent)
        .onClose.subscribe((data) =>{
          this.flag=false;  
          if(!data)return;        
        
          if(data.message == "ON")data.message = this.messageOn;
          else data.message = this.messageOff;
          data.buttonID = this.button_ID;
          data.deviceID = this.device;
          this.service.taskEsp(data).subscribe((res) => {
            
          }); 
        });
    }


  cardClick(){
    if(this.flag) return;
    this.on = !this.on;
    this.data.id = this.device;
    this.data.buttonID = this.button_ID;
    if(this.on)  this.data.message = this.messageOn;
    else this.data.message = this.messageOff;
    this.data.status = String(this.on);
    this.service.signalEsp(this.data).subscribe((res) => {
      //this.showToast(res.msg,this.title);
    });   
    
  }
}
