import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionInsertComponent } from './action-insert/action-insert.component';
import { ActionManageComponent } from './action-manage/action-manage.component';

@NgModule({
  declarations: [ActionInsertComponent, ActionManageComponent],
  imports: [
    CommonModule
  ]
})
export class ActionsModule { }
