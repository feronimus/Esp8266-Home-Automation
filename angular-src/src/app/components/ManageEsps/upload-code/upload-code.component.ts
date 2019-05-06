import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {AuthService} from './../../../services/auth.service';


var uri;
@Component({
  selector: 'app-upload-code',
  templateUrl: './upload-code.component.html',
  styleUrls: ['./upload-code.component.css']
})
export class UploadCodeComponent implements OnInit {



  ngOnInit() {
    uri = this.authService.uri;
  }

  uploader:FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];

    constructor(private authService: AuthService){
      this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; }; 
        this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
            this.attachmentList.push(JSON.parse(response));
        }
    }

}
