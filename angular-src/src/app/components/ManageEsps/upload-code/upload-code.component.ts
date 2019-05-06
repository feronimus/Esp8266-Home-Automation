import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';



//const uri = 'http://localhost:3000/../uploads';
const uri = '/uploads';
@Component({
  selector: 'app-upload-code',
  templateUrl: './upload-code.component.html',
  styleUrls: ['./upload-code.component.css']
})
export class UploadCodeComponent implements OnInit {



  ngOnInit() {
  }

  uploader:FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];

    constructor(){
      this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; }; 
        this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
            this.attachmentList.push(JSON.parse(response));
        }
    }

}
