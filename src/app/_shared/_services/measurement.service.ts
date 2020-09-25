import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
      Authorization: 'Basic ' + sessionStorage.getItem('account'),
    }),
  };
  constructor(private http: HttpClient) {}

  /** GET all (not working, needs backend love) measurements from the server */
  getMeasurements(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(
      this.baseUrl + 'measurements',
      this.httpOptions
    );
  }

  /** GET current user's measurements from the server */
  getCurrentUserMeasurements(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(
      this.baseUrl + 'myaccount/mymeasurements',
      this.httpOptions
    );
  }

  /** GET clicked measurement details from the server */
  getMeasurementsById(id: string): Observable<Measurement> {
    const url = `${this.baseUrl}measurements/${id}`;
    return this.http.get<Measurement>(url, this.httpOptions).pipe(
      tap((_) => console.log(`fetched measurement id=${id}`)),
      catchError(this.handleError<Measurement>(`getMeasurementsById id=${id}`))
    );
  }

  /** POST: add a new measurement to the server */
  addMeasurement(values: Measurement): Observable<any> {
    return this.http.post(
      this.baseUrl + 'measurements',
      {
        glucose_level: values.carb_intake,
        carb_intake: values.glucose_level,
      },
      this.httpOptions
    );
  }

  /** PUT: update a measurement and save it into the server */
  updateMeasurements(id: string, measurements: Measurement): Observable<any> {
    const url = `${this.baseUrl}measurements/${id}`;
    return this.http.put(url, measurements, this.httpOptions).pipe(
      tap((_) => console.log(`updated measurement with id=${id}`)),
      catchError(this.handleError<any>('updateMeasurements'))
    );
  }

  /** DELETE: delete a measurement from the server *be careful with this* */
  deleteMeasurements(id: string): Observable<Measurement> {
    const url = `${this.baseUrl}measurements/${id}`;
    return this.http.delete<Measurement>(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted measurement with id=${id}`)),
      catchError(this.handleError<Measurement>('deleteMeasurements'))
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
