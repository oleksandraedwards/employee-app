import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Inject} from '@angular/core';




import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


import {User} from '../model/user';
import {HandleError, HttpErrorHandler} from '../services/http-error-handler.service';
import {MessageService} from '../services/message.service';
import {Role} from '../model/role';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class UserListService {
  private URL = 'http://localhost:8080';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }

  /** GET heroes from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}/admin`);
    // .pipe(
    //   catchError(this.handleError('admin', []))
    // );
  }
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.URL}/admin/roles`);
    // .pipe(
    //   catchError(this.handleError('admin', []))
    // );
  }

  /* GET heroes whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
      {params: new HttpParams().set('name', term)} : {};
    return this.http.get<User[]>(this.URL, options)
      .pipe(
        catchError(this.handleError<User[]>('searchUsers', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL, user)
      .pipe(
        catchError(this.handleError('addUser', user))
      );
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** DELETE: delete the hero from the server */
  deleteUser(id: number): Observable<{}> {
    const url = `${this.URL}/admin/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  saveRole(role: Role): Observable<Role> {
    // httpOptions.headers =
    // httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Role>(this.URL, role)
      .pipe(
        catchError(this.handleError('updateHero', role))
      );
  }
}

