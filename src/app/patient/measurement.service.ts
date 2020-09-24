import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Measurement } from './measurement';

@Injectable({
  providedIn: 'root',
})
export class MeasurementService {
  private baseUrl = 'http://localhost:9000/v1/team6/sacchon/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + localStorage.getItem('account'),
    }),
  };
  constructor(private http: HttpClient) {}

  /** GET measurements from the server */
  getMeasurements(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(this.baseUrl + 'measurements', {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    });
  }

  /** POST: add a new measurement to the server */
  addMeasurement(values: Measurement): Observable<any> {
    
    return this.http.post(
      this.baseUrl + 'measurements',
      {
        glucose_level: values.carb_intake,
        carb_intake: values.glucose_level,
      },
      {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + localStorage.getItem('account'),
        }),
      }
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
