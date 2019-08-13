import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UploadFileService} from '../services/upload-file.service';

@Component({
  selector: 'app-sharepoint',
  templateUrl: './sharepoint.component.html',
  styleUrls: ['./sharepoint.component.css']
})
export class SharepointComponent implements OnInit {

  fileUploads: Observable<string[]>;
  @Input() fileUpload: string;


  constructor(private uploadService: UploadFileService) {
  }
  ngOnInit() {
  }

}
