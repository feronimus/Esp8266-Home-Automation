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
        let temp: CardSettings = {
          title: device.name,
          iconClass: 'nb-lightbulb',
          type: 'primary',
          device: device._id
        };
        this.statusCards.push(temp);
      });
     });
  }
}
