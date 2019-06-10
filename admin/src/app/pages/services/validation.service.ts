import { Injectable } from '@angular/core';
import { messages } from '../extra-components/chat/messages';
import { id } from '@swimlane/ngx-charts/release/utils';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }


  validateRegisterESP(esp){
    if(esp.name == undefined || esp.name == "" ||
     esp.description == undefined || esp.description == ""||
      esp.secret == undefined || esp.secret == "" ||
      esp.firmware == "none"
      ){
      return false;
    } else {
      if(esp.secret != undefined){
        if(esp.secret.length <= 7){
          return false;
        }
      }
      return true;
    }
  }

  pickErrorsRegisterEsp(esp){
    let messages = [];
    if(esp.name == undefined || esp.name == "" ){
      messages.push("'Name' Field must be filled.");
    };
    if( esp.description == undefined || esp.description == ""){
      messages.push("'Description' Field must be filled.");
    };
    if(esp.secret == undefined|| esp.secret == ""){
      messages.push("'Secret' Field must be filled.");
      messages.push("Secret must have more than 8 characters in it.");
    };
    if(esp.secret != undefined){
      if(esp.secret.length <= 7){
        messages.push("Secret must have more than 8 characters in it.");
      }
    }
    if(esp.firmware == "none"  ){
      messages.push("You MUST Choose a firmware to associate with this Device");
    };

    return messages;
  }


  validateRegisterFirmware(firmware){
    if(firmware.name == undefined || firmware.name == "" ||
      firmware.description == undefined || firmware.description == ""||
      firmware.version.main == undefined || firmware.version.secondary == undefined||
      firmware.link == undefined || firmware.link == ""||
      firmware.group == undefined || firmware.group == ""||
      firmware.device == undefined || firmware.device == ""||
      firmware.code == undefined || firmware.code == ""
      ){
      return false;
    } else {      
      return true;
    }
  }

  pickErrorsRegisterFirmware(firmware){
    let messages = [];
    if(firmware.name == undefined || firmware.name == "" ){
      messages.push("'Name' Field must be filled.");
    };
    if( firmware.description == undefined || firmware.description == ""){
      messages.push("'Description' Field must be filled.");
    };
    if( firmware.link == undefined || firmware.link == ""){
      messages.push("'link' Field must be filled.");
    };
    if( firmware.group == undefined || firmware.group == ""){
      messages.push("'Category' Field must be filled.");
    };
    if( firmware.device == undefined || firmware.device == ""){
      messages.push("'Device' Field must be filled.");
    };
    if( firmware.code == undefined || firmware.code == ""){
      messages.push("'Code' Field must be filled.");
    };
    return messages;
  }
}
