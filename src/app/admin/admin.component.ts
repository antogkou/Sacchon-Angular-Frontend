import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_shared/_models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  readonly baseUrl = 'http://localhost:9000/v1/team6/sacchon';

  users$: Observable<User[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.users$ = this.http.get<User[]>(`${this.baseUrl}/get-all-users`, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    });
  }

}
