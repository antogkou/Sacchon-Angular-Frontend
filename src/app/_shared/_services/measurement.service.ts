import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Measurement } from '../_models/measurement';

@Injectable({
  providedIn: 'root',
})
export class MeasurementService {
  private baseUrl = 'http://localhost:9000/v1/team6/sacchon/';
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Basic ' + localStorage.getItem('account'),
    }),
  };
  constructor(private http: HttpClient, private route: Router) {}

  /** GET all measurements from the server */
  getMeasurements(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(
      this.baseUrl + 'measurements',
      {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + localStorage.getItem('account'),
        }),
      }
    );
  }

  /** GET current user's measurements from the server */
  getCurrentUserMeasurements(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(this.baseUrl + 'myaccount/mymeasurements', {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    }).pipe(
      tap((_ => console.log('fetched current user measurements')),
      catchError(this.handleError<Measurement>('getCurrentUserMeasurements')))
    );
  }

  /** GET clicked measurement details from the server */
  getMeasurementsById(id: string): Observable<Measurement> {
    const url = `${this.baseUrl}measurements/${id}`;
    return this.http.get<Measurement>(url, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    }).pipe(
      tap((_) => console.log(`fetched measurement id=${id}`)),
      catchError(this.handleError<Measurement>(`getMeasurementsById id=${id}`))
    );
  }

  /** GET measurements by date */
  getMeasurementsByDate(startDate: Date, endDate: Date): Observable<Measurement> {
    const url = `${this.baseUrl}myaccount/avg?from=${startDate}&to=${endDate}`;
    return this.http.get<Measurement>(url, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    }).pipe(
      tap((_) => console.log(`fetched measurement with date from=${startDate} to=${endDate}`)),
      catchError(this.handleError<Measurement>(`getMeasurementsByDate from=${startDate} to=${endDate}`))
    );
  }

   /** GET measurements by date */
  //  getMeasurementsByDate(startDate: Date, endDate: Date): Observable<Measurement[]> {
  //   const url = `${this.baseUrl}myaccount/avg?from=${startDate}&to=${endDate}`;
  //   return this.http.get<Measurement[]>(url,{
  //     headers: new HttpHeaders({
  //       Authorization: 'Basic ' + localStorage.getItem('account'),
  //     }),
  //   }).pipe(
  //     tap((_ => console.log('fetched current user measurements by date')),
  //     catchError(this.handleError<Measurement>('getMeasurementsByDate')))
  //   );
  // }

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

  /** PUT: update a measurement and save it into the server */
  updateMeasurements(id: string, measurements: Measurement): Observable<any> {
    const url = `${this.baseUrl}measurements/${id}`;
    return this.http.put(url, measurements, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    }).pipe(
      tap((_) => console.log(`updated measurement with id=${id}`)),
      catchError(this.handleError<any>('updateMeasurements'))
    );
  }

  /** DELETE: delete a measurement from the server *be careful with this* */
  deleteMeasurements(id: string): Observable<Measurement> {
    const url = `${this.baseUrl}measurements/${id}`;
    return this.http.delete<Measurement>(url, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    }).pipe(
      tap((_) => console.log(`deleted measurement with id=${id}`)),
      catchError(this.handleError<Measurement>('deleteMeasurements'))
    );
  }

  /**Fix method and endpoint in order to consume by doctor's see patient's without doctor measurement */

  getMeasurementsByPatientsEmail(email: string): Observable<Measurement> {
    const url = `${this.baseUrl}patient/measurements?email=${email}`;
    return this.http.get<Measurement>(url, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + localStorage.getItem('account'),
      }),
    }).pipe(
      tap((_) => console.log(`fetched measurement with patient mail=${email}`)),
      catchError(this.handleError<Measurement>(`getMeasurementsByPatientsEmail email=${email}`))
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
       console.error('Backend returned 404');
       
      } else if (error.error.code == 500) {
        console.error('Backend returned 500');
      }else if (error.error.code == 401) {
        console.error('Backend returned 401');
      }
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
