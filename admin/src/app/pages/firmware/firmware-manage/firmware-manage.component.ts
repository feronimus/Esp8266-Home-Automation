import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Ng2SmartTableComponent } from 'ng2-smart-table/ng2-smart-table.component';
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
      this.refreshSource()
  }

  refreshSource(){
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
      position: "right",
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
  mode: 'external',
    
  };

  @ViewChild('table')
  smartTable: Ng2SmartTableComponent;
  ngAfterViewInit(): void {

    this.smartTable.edit.subscribe( (dataObject: any) => {
      this.ManageFirmware(dataObject);
    });

    this.smartTable.delete.subscribe( (dataObject: any) => {
      if (window.confirm('Are you sure you want to delete?')) {        
        this.DeleteFirmware(dataObject);        
        this.refreshSource()
      } 
    });

    this.smartTable.create.subscribe( (dataObject: any) => {
      this.NewFirmware()
    });
  }

  ManageDevice(dataObject){
    this.service.FocusedDeviceID = dataObject.data._id;
    this.router.navigate(['/pages/device/input']);
  }


  DeleteFirmware(dataObject){
    this.service.DeleteFirmware({ '_id': dataObject.data._id}).subscribe(esps => {

    });
  }


  NewFirmware(){   
    this.service.FocusedDeviceID ="";
     this.router.navigate(['/pages/firmware/input']);
  }

  ManageFirmware($event){
    this.service.FocusedFirmwareID =$event.data._id;
    this.router.navigate(['/pages/firmware/input']);
  }



}
