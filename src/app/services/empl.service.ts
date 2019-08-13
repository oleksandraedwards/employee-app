import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Empl} from '../model/empl';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmplService {

  private URL = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:test123')});
    return this.http.get(`${this.URL}/empl-list/${id}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  // /** POST: add a new hero to the database */
  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }
  //
  createEmployee(employee: Empl): Observable<any> {
    return this.http.post(`${this.URL}/empl-list`, employee);
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(`${this.URL}/empl-list/${id}`, employee)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/empl-list/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.URL}/empl-list`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
