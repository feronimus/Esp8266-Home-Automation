import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Basic/navbar/navbar.component';
import { LoginComponent } from './components/Basic/login/login.component';
import { RegisterComponent } from './components/Basic/register/register.component';
import { HomeComponent } from './components/Basic/home/home.component';
import { DashboardComponent } from './components/Basic/dashboard/dashboard.component';
import { ProfileComponent } from './components/Basic/profile/profile.component';
import { RouterModule, Routes} from '@angular/router';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http'; 
import {AuthGuard} from './guards/auth.guard';
import {LoggedGuard} from './guards/logged.guard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IotAutomationComponent } from './components/Controlls/iot-automation/iot-automation.component';
import { ManageComponent } from './components/ManageEsps/manage/manage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MatNativeDateModule} from '@angular/material';
import { UploadCodeComponent } from './components/ManageEsps/upload-code/upload-code.component';
import { FileUploadModule} from 'ng2-file-upload';

const appRoutes: Routes = [
  {path:'', component: HomeComponent , canActivate:[LoggedGuard]},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent , canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent , canActivate:[AuthGuard]}, 
  {path:'manage', component: ManageComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    IotAutomationComponent,
    ManageComponent,
    UploadCodeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    DemoMaterialModule,
    MatNativeDateModule,
    //MatButtonModule,MatFormFieldModule,MatInputModule, MatRippleModule,MatSliderModule,
    BrowserAnimationsModule  
  ],
  providers: [ValidateService, AuthService, AuthGuard,LoggedGuard],
  bootstrap: [AppComponent]  
})
export class AppModule { }
