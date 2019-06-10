import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EspComponent} from './esp.component';
import { EspInsertComponent } from './esp-insert/esp-insert.component';
import { EspManageComponent } from './esp-manage/esp-manage.component';


const routes: Routes = [{
  path: '',
  component: EspComponent,
  children: [
    {
      path: 'input',
      component: EspInsertComponent,
    },
   
    {
      path: 'manage',
      component: EspManageComponent,
    },
     /*
    {
      path: 'layouts',
      component: FormLayoutsComponent,
    },
    {
      path: 'buttons',
      component: ButtonsComponent,
    },
    {
      path: 'datepicker',
      component: DatepickerComponent,
    },
    */
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
export class EspRoutingModule {

}

export const routedComponents = [
  EspComponent,
  EspInsertComponent,
];
