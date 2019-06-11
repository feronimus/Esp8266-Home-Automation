import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
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

  ManageDevice($event){
    this.service.FocusedDeviceID =$event.data._id;
    this.router.navigate(['/pages/device/input']);
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
        title: 'Device Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      group: {
        title: 'Location',
        type: 'html', 
        editor: {
          type: 'list',
          config: { 
            selectText: 'Select',
            list: this.Locations
          }, 
         },
        }, 
      /*
      username2: { 
        title: 'User Name', 
        type: 'html', 
        editor: { 
          type: 'list', 
          config: { 
            list: [{ value: 'Antonette', title: 'Antonette' }, { value: 'Bret', title: 'Bret' }, { 
              value: '<b>Samantha</b>', 
              title: 'Samantha', 
            }], 
          }, 
        }, 
      }, 
    */
  },
    
  };

  


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
