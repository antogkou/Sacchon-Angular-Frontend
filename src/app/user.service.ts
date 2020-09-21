import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  readonly baseUrl = 'http://localhost:9000/v1/team6/sacchon/';

  // username = 'test@gmail.com';
  // password = '123456#!';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users-without-doctor', {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    });
  }

  login(email, password){
    return this.http.post(this.baseUrl + 'login', {
      email,
      password
    }).pipe(
      tap((data: any)=>{
        btoa(data.email + ':' + data.password)
        localStorage.setItem('account', btoa(data.email + ':' + data.password))
      })
    )
  }
}
