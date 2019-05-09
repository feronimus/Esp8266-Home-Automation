import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;


  constructor(private http: HttpClient) { }

  //uri = 'esp/espuploads';
  //uri = 'http://localhost:3000/esp/espuploads'; 

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    //return this.http.post('users/register', user,{headers: headers}).pipe(map((response: any) => response));
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers}).pipe(map((response: any) => response));
  }
  
  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    //return this.http.post('users/authenticate', user,{headers: headers}).pipe(map((response: any) => response));    
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers}).pipe(map((response: any) => response));
  }

  getProfile(){    
    this.loadToken();    
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authToken
    });
    //return this.http.get('users/profile',{headers: headers}).pipe(map((response: any) => response));
    return this.http.get('http://localhost:3000/users/profile',{headers: headers}).pipe(map((response: any) => response));
  }

  userCheck(user){   
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    //return this.http.post('users/usercheck', user,{headers: headers}).pipe(map((response: any) => response));
    return this.http.post('http://localhost:3000/users/usercheck', user,{headers: headers}).pipe(map((response: any) => response));
  }

  turnLedOnOFF(State){    
    this.loadToken();    
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    let body = {'led1': State};
    console.log(body);
    //return this.http.post('users/updateESPTESTAdmin',body,{headers: headers }).pipe(map((response: any) => response));
    return this.http.post('http://localhost:3000/users/updateESPTESTAdmin',body,{headers: headers }).pipe(map((response: any) => response));
  }

  getEspState(){
    console.log("getting esp state")
    //this.loadToken();    
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authToken
    });
    //return this.http.get('users/espState',{headers: headers}).pipe(map((response: any) => response));
    return this.http.get('http://localhost:3000/users/espState',{headers: headers}).pipe(map((response: any) => response));
  }

  registerEsp(esp){   
    this.loadToken();    
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authToken
    });
    //return this.http.post('esp/register', esp,{headers: headers}).pipe(map((response: any) => response));
    return this.http.post('http://localhost:3000/esp/register', esp,{headers: headers}).pipe(map((response: any) => response));
  }

  updateEsp(esp){   
    this.loadToken();    
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authToken
    });
    //return this.http.post('esp/update', esp,{headers: headers}).pipe(map((response: any) => response));
    return this.http.post('http://localhost:3000/esp/update', esp,{headers: headers}).pipe(map((response: any) => response));
  }

  getEspByUser(){
    this.loadToken();    
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authToken
    });
    //return this.http.get('esp/esps',{headers: headers}).pipe(map((response: any) => response));
    return this.http.get('http://localhost:3000/esp/esps',{headers: headers}).pipe(map((response: any) => response));
  }



  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken =token; 
    const user = JSON.parse(localStorage.getItem('user'));
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user =null;
    localStorage.clear();
  }


  loggedIn(){
    if (localStorage.id_token == undefined ){
     //console.log('true');
     return false
    } else {    
        const helper = new JwtHelperService();
        //console.log(helper.isTokenExpired(localStorage.id_token)); 
        if(!helper.isTokenExpired(localStorage.id_token))this.loadToken(); 
        return !helper.isTokenExpired(localStorage.id_token);
    }    
   }

   
  
}
