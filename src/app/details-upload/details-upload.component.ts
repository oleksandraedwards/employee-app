import {Component, Input, OnInit} from '@angular/core';
import {HttpErrorHandler} from '../services/http-error-handler.service';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css'],
  providers: []
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: string;

  constructor(private http: HttpErrorHandler) {

  }

  ngOnInit() {
  }

}
