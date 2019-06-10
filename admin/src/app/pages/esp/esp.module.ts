import { NgModule } from '@angular/core';
import { EspRoutingModule, routedComponents } from './esp-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ButtonsModule } from './buttons/buttons.module';
import { EspManageComponent } from './esp-manage/esp-manage.component';
import { EspChangeComponent } from './esp-change/esp-change.component';
import {BackendService} from '../services/backend.service';
import { CKEditorModule } from 'ng2-ckeditor';


import { TreeModule } from 'angular-tree-component';

@NgModule({ 
  imports: [
    EspRoutingModule,
    ThemeModule,
    ButtonsModule,
    Ng2SmartTableModule,
    TreeModule,
    CKEditorModule
  ],
  declarations: [
    ...routedComponents,
    EspManageComponent,
    EspChangeComponent,
  ],
  providers: [BackendService],
})
export class EspModule { }
