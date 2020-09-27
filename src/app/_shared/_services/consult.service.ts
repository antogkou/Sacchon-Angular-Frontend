import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Consult } from '../_models/consult';

@Injectable({
  providedIn: 'root',
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

  /** GET consults from the server */
  getConsults(): Observable<Consult[]> {
    return this.http.get<Consult[]>(this.baseUrl + 'consult', this.httpOptions);
  }

  /** GET clicked consult id from the server */
  getConsultById(id: string): Observable<Consult> {
    const url = `${this.baseUrl}consult/${id}`;
    return this.http.get<Consult>(url, this.httpOptions).pipe(
      tap((_) => console.log(`fetched consult id=${id}`)),
      catchError(this.handleError<Consult>(`getConsultById id=${id}`))
    );
  }

  /**GET consult by patient email */
  getConsultByPatientEmail(email: string): Observable<Consult>{
    const url = `${this.baseUrl}my-patients?consults-of-patient&email=${email}`;
    return this.http.get<Consult>(url, this.httpOptions).pipe(
      tap((_) => console.log(`fetched consults with patient mail=${email}`)),
      catchError(this.handleError<Consult>(`getConsultByPatientEmail email=${email}`))
    );
  }


  /** Post consult to the server */
  addConsult(values: Consult, email: string): Observable<any> {
    return this.http.post(
      this.baseUrl + 'consult',
      {
        consultText: values.consultText,
        dosage: values.dosage,
        medication: values.medication,
        patient_email: email
      },
      this.httpOptions
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
