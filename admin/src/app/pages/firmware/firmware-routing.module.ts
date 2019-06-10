import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FirmwareComponent} from './firmware.component';
import { FirmwareInsertComponent } from './firmware-insert/firmware-insert.component';



const routes: Routes = [{
    path: '',
  component: FirmwareComponent,
  children: [
    {
      path: 'input',
      component: FirmwareInsertComponent,
    },
  ],
}];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
  })
  export class FirmwareRoutingModule {
  
  }
  
  export const routedComponents = [
    FirmwareComponent,
    FirmwareInsertComponent,
  ];