import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Ng2SmartTableComponent } from 'ng2-smart-table/ng2-smart-table.component';
import {BackendService} from '../../services/backend.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'ngx-esp-manage',
  templateUrl: './esp-manage.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class EspManageComponent  {

  source: LocalDataSource = new LocalDataSource();
  Locations= [];

  constructor(
    private service: BackendService,
    private router : Router,
    ) {
      this.refreshSource()    
  }


  refreshSource(){
    this.service.getEspByUser().subscribe(esps => {
      this.source.load(esps.esps.esp);
      esps.esps.esp.forEach(element => {
        if(!this.Locations.includes(element.group)) this.Locations.push(element.group);
      });
      },
      err => {
        console.log(err);
        return false;
      });
  }


  NewDevice(){   
    this.service.FocusedDeviceID ="";
     this.router.navigate(['/pages/device/input']);
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
        title: 'Device Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'html',
      },
      group: {
        title: 'Device Location',
        type: 'string',
      },
    },
    mode: 'external',
  };
  
  @ViewChild('table')
  smartTable: Ng2SmartTableComponent;
  ngAfterViewInit(): void {

    this.smartTable.edit.subscribe( (dataObject: any) => {
      this.ManageDevice(dataObject);
    });

    this.smartTable.delete.subscribe( (dataObject: any) => {
      if (window.confirm('Are you sure you want to delete?')) {        
        this.DeleteDevice(dataObject);
      } 
    });
    this.smartTable.create.subscribe( (dataObject: any) => {
      this.NewDevice()
    });
  }

  ManageDevice(dataObject){
    this.service.FocusedDeviceID = dataObject.data._id;
    this.router.navigate(['/pages/device/input']);
  }
  DeleteDevice(dataObject){
    console.log("inside deletedevice of espmanage ts")
    this.service.DeleteEsp({ '_id': dataObject.data._id}).subscribe(esps => {
      this.refreshSource()
    });
  }

}
