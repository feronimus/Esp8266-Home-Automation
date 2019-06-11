import { NgModule } from '@angular/core';
import { FirmwareRoutingModule} from './firmware-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {BackendService} from '../services/backend.service';
import { ThemeModule } from '../../@theme/theme.module';
import { FirmwareComponent } from './firmware.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FirmwareInsertComponent } from './firmware-insert/firmware-insert.component';
import { FirmwareManageComponent } from './firmware-manage/firmware-manage.component';

@NgModule({
  declarations: [FirmwareComponent, FirmwareInsertComponent, FirmwareManageComponent],
  imports: [
    FirmwareRoutingModule,
    Ng2SmartTableModule,
    ThemeModule,
    CKEditorModule,
  ],
  providers: [BackendService],
})
export class FirmwareModule { }
