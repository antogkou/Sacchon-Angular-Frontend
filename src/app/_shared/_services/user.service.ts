import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUserRole: any;

  constructor(private http: HttpClient) {}

  readonly baseUrl = 'http://localhost:9000/v1/team6/sacchon/';
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Basic ' + localStorage.getItem('account'),
    }),
  };

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users-without-doctor', this.httpOptions);
  }

  login(email, password) {
    return this.http
      .post(this.baseUrl + 'login', {
        email,
        password,
      })
      .pipe(
        tap((data: any) => {
          btoa(data.email + ':' + data.password);
          localStorage.setItem(
            'account',
            btoa(data.email + ':' + data.password)
          );
          //test
          this.currentUserRole = data.userRole;
          console.log(this.currentUserRole);
        })
      );
  }

  register(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  checkRole(userRole) {
    return this.http
      .post(this.baseUrl + 'login', {
        userRole,
      })
      .pipe(
        tap((data: any) => {
          btoa(data.userRole);
          localStorage.setItem('accountRole', btoa(data.userRole));
        })
      );
  }

  /** GET patients that don't have active doctor */
  getUsersWithoutDoctor(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users-without-doctor', {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    });
  }

  /**GET specific doctor's patients */

  getDoctorPatients(): Observable<User[]> {
    const url = `${this.baseUrl}my-patients`;
    return this.http.get<User[]>(url, this.httpOptions).pipe(
      tap((_) => console.log(`fetched my patients`)),
      catchError(this.handleError<User[]>(`getDoctorPatients failed`))
    );
  }

  getUsersById(id: string): Observable<User> {
    const url = `${this.baseUrl}users-without-doctor/${id}`;
    return this.http.get<User>(url, this.httpOptions).pipe(
      tap((_) => console.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUsersById id=${id}`))
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseUrl}get-all-users`,
      this.httpOptions).pipe(
      tap((_) => console.log(`fetched all users`)),
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
