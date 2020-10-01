import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUserRole: any;

  constructor(private http: HttpClient, private route: Router) {}

  readonly baseUrl = 'http://localhost:9000/v1/team6/sacchon/';
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Basic ' + localStorage.getItem('account'),
    }),
  };

  options = {
    headers: new HttpHeaders({
      Authorization: 'Basic ' + localStorage.getItem('account'),
    }),
    body: {
      email: '',
    },
  };

  /** GET all users without doctor */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users-without-doctor', {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    });
  }

  /** GET current user information */
  getCurrentUserInfo(): Observable<User[]> {
    const url = `${this.baseUrl}user-panel`;
    return this.http
      .get<User[]>(url, {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + localStorage.getItem('account'),
        }),
      })
      .pipe(
        tap((_) => console.log(`fetched current user information`)),
        catchError(this.handleError<User[]>(`getCurrentUserInfo failed`))
      );
  }

  /** GET current user information */
  updateCurrentUserInfo(user: User): Observable<User[]> {
    const url = `${this.baseUrl}user-panel`;
    return this.http
      .put<User[]>(url, user, {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + localStorage.getItem('account'),
        }),
      })
      .pipe(
        tap((_) => console.log(`updated current user information`)),
        catchError(this.handleError<User[]>(`updateCurrentUserInfo failed`))
      );
  }

  /** DELETE user  */
  disableUser(email: string): Observable<User> {
    const url = `${this.baseUrl}delete`;
    return this.http.delete<User>(url, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    });
  }

  /** POST login users */
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
          this.currentUserRole = data.userRole;
          console.log(this.currentUserRole);
        }), catchError(this.handleError<User[]>(`login failed`))
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

  /** GET specific doctor's patients */
  getDoctorPatients(): Observable<User[]> {
    const url = `${this.baseUrl}my-patients`;
    return this.http
      .get<User[]>(url, {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + localStorage.getItem('account'),
        }),
      })
      .pipe(
        tap((_) => console.log(`fetched my patients`)),
        catchError(this.handleError<User[]>(`getDoctorPatients failed`))
      );
  }

  /** GET users without doctor by id */
  getUsersById(id: string): Observable<User> {
    const url = `${this.baseUrl}users-without-doctor/${id}`;
    return this.http
      .get<User>(url, {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + localStorage.getItem('account'),
        }),
      })
      .pipe(
        tap((_) => console.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getUsersById id=${id}`))
      );
  }

  /** GET all users */
  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}get-all-users`, {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + localStorage.getItem('account'),
        }),
      })
      .pipe(tap((_) => console.log(`fetched all users`)));
  }

  /** GET inactive doctors over a time range */
  getInactiveDoctors(startDate: Date, endDate: Date): Observable<User[]> {
    return this.http
      .get<User[]>(
        `${this.baseUrl}admin-panel?inactive&from=${startDate}&to=${endDate}`,
        {
          headers: new HttpHeaders({
            Authorization: 'Basic ' + localStorage.getItem('account'),
          }),
        }
      )
      .pipe(tap((_) => console.log(`fetched all inactive doctors`)));
  }

  /** GET inactive patients over a time range */
  getInactivePatients(startDate: Date, endDate: Date): Observable<User[]> {
    return this.http
      .get<User[]>(
        `${this.baseUrl}admin-panel?inactive&from=${startDate}&to=${endDate}`,
        {
          headers: new HttpHeaders({
            Authorization: 'Basic ' + localStorage.getItem('account'),
          }),
        }
      )
      .pipe(tap((_) => console.log(`fetched all inactive doctors`)));
  }

  /** GET a patient's data by using email */
  getPatientData(email: string): Observable<User> {
    return this.http
      .get<User>(`${this.baseUrl}admin-panel?patient&email=${email}`, {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + localStorage.getItem('account'),
        }),
      })
      .pipe(
        tap((_) => console.log(`fetched patient with data email=${email}`)),
        catchError(this.handleError<User>(`getPatient from admin panel`))
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
      if (error.error.code == 404) {
        this.route.navigate(['/404']);
      } else if (error.error.code == 500) {
        this.route.navigate(['/500']);      
      }else if (error.error.code == 401) {
        this.route.navigate(['/401']);
      }

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
