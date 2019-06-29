import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  authToken: any;
  FocusedDeviceID: any;
  FocusedFirmwareID: any;
  constructor(
    private http: HttpClient,
    private authService: NbAuthService) { }
  
  serverURL = '';
  //serverURL = 'http://localhost:3000/';


  registerEsp(data){  
    return this.http.post(this.serverURL +'esp/register', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }

  updateEsp(data){  
    return this.http.post(this.serverURL +'esp/update', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }

  signalEsp(data){ 
    return this.http.post(this.serverURL +'esp/signal', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }

  taskEsp(data){ 
    return this.http.post(this.serverURL +'esp/task', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }

  DeleteEsp(data){ 
    console.log("inside DeleteEsp of service backend ts")
    return this.http.post(this.serverURL +'esp/delete', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }

  getEspByUser(){
    return this.http.get(this.serverURL +'esp/esps',{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }


  registerFirmware(data){  
    console.log(data.buttons.length);
    return this.http.post(this.serverURL +'firmware/register', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }

  updateFirmware(data){  
    return this.http.post(this.serverURL +'firmware/update', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }

  DeleteFirmware(data){ 
    return this.http.post(this.serverURL +'firmware/delete', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }

 //Get reformed Gouprs data
  getFirmwareGroups(data){  
    return this.http.post(this.serverURL +'firmware/groups', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  } 
  getFirmwareGroupNames(data){  
    return this.http.post(this.serverURL +'firmware/groupNames', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }
  getFirmwareGroupNameDevices(data){  
    return this.http.post(this.serverURL +'firmware/groupNameDevices', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }
  getFirmwareGroupNameDeviceVersions(data){  
    return this.http.post(this.serverURL +'firmware/groupNameDeviceVersions', data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }

  getDevices(){  
    return this.http.get(this.serverURL +'firmware/DistinctDevices',{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }
  

  getFirmwareById(data){  
    return this.http.post(this.serverURL +'firmware/id',data,{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }
  getFirmwareByUser(){  
    return this.http.get(this.serverURL +'firmware/user',{headers: this.getHeaderWithToken()}).pipe(map((response: any) => response));
  }




  //End get reformed Gouprs data
  getHeaderWithToken()  : HttpHeaders{
    this.loadToken();    
    return new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'JWT '+ this.authToken.value.token
    });   
  }

  loadToken(){   
    this.authToken = this.authService.getToken();
    //console.log( this.authToken.value.token);
  }
}
