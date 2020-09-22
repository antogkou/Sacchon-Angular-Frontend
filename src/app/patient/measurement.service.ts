import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user-account/_models/user';
import { Measurement } from './measurement';

@Injectable({
  providedIn: 'root',
})
export class MeasurementService {
  private userSubject: BehaviorSubject<User>;
  constructor(private http: HttpClient) {}
  readonly baseUrl = 'http://localhost:9000/v1/team6/sacchon/';

  username = 'test@gmail.com';
  password = '123456#!';

  getMeasurements(): Observable<Measurement[]> {
    // return this.http.get<Measurement[]>(this.baseUrl + 'measurements', {
    //   headers: new HttpHeaders({
    //     Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    //   }),
    // });
    return this.http.get<Measurement[]>(this.baseUrl + 'measurements', {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    });
  }

  addMeasurement(values): Observable<any> {
    console.log(values.get('glucose_level').value);
    return this.http.post(
      this.baseUrl + 'measurements',
      {
        glucose_level: values.get('glucose_level').value,
        carb_intake: values.get('carb_intake').value,
        // 'inventoryQuantity':values.get('inventoryQuantity').value
      },
      {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
        }),
      }
    );
  }
}
