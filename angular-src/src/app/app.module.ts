import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes} from '@angular/router';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http'; 
import {AuthGuard} from './guards/auth.guard';
import {LoggedGuard} from './guards/logged.guard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OverviewComponent } from './components/overview/overview.component';
import { IotAutomationComponent } from './components/iot-automation/iot-automation.component';
import { ManageComponent } from './components/manage/manage.component';
//import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule , MatSliderModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MatNativeDateModule} from '@angular/material';



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
    OverviewComponent,
    IotAutomationComponent,
    ManageComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
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
