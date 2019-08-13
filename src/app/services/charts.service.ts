import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }
  getEmpls() {
    return this.http.get('http://localhost:8080/empl-list', {responseType: 'json'})
      .pipe(
        map(result => result))
      ;
  }
}

