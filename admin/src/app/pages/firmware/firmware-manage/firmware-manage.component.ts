import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {BackendService} from '../../services/backend.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'ngx-firmware-manage',
  templateUrl: './firmware-manage.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class FirmwareManageComponent  {

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: BackendService,
    private router : Router,
    ) {
    this.service.getFirmwareByUser().subscribe(firms => {
        this.source.load(firms.firmware); 
    },
    err => {
      console.log(err);
      return false;
    });
    
  }

  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      delete : false,
      edit:false,
      position: "right",
      custom: [
        { 
          name: 'Edit item',
           title: '<i class="ion-forward"></i>',
        },       
      ],         
      },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },      
      versionReadable: {
        title: 'Version',
        type: 'string',
      },      
      isPublic: {
        title: 'Public',
      },
      group: {
        title: 'Category',
        type: 'string',
      },
      device: {
        title: 'Device',
        type: 'string',
      }
  },
    
  };


  NewFirmware(){   
    this.service.FocusedDeviceID ="";
     this.router.navigate(['/pages/firmware/input']);
  }

  ManageFirmware($event){
    this.service.FocusedFirmwareID =$event.data._id;
    this.router.navigate(['/pages/firmware/input']);
  }

onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
