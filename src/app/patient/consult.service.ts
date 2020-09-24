import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consult } from './consult';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {
  private baseUrl = 'http://localhost:9000/v1/team6/sacchon/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + localStorage.getItem('account'),
    }),
  };
  constructor(private http: HttpClient) {}

  /** GET measurements from the server */
  getMeasurements(): Observable<Consult[]> {
    return this.http.get<Consult[]>(this.baseUrl + 'consult', {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    });
  }
}
