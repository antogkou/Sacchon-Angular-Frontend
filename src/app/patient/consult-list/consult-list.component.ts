import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Consult } from '../../_shared/_models/consult';
import { ConsultService } from '../../_shared/_services/consult.service';

@Component({
  selector: 'app-consult-list',
  templateUrl: './consult-list.component.html',
  styleUrls: ['./consult-list.component.scss'],
})
export class ConsultListComponent implements OnInit {
  constructor(private consultService: ConsultService) {}
  page = 1;
  pageSize = 5;
  consults: Consult[];
  private _success = new Subject<string>();
  private _consultsub$ = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';

  ngOnInit(): void {
    this.getMyPatientConsult();
    this.toastMessage();
  }

  ngOnDestroy(): void {
    this._success.unsubscribe();
    console.log('ngOnDestroy called')
  }

  getMyPatientConsult() {
     this.consultService.getMyPatientConsults().subscribe((consults) => {
      this.consults = consults;
      console.log(consults);
    });
  }

  toastMessage() {
    this._success.subscribe((message) => (this.successMessage = message));
    this._success
      .pipe(debounceTime(5000))
      .subscribe(() => (this.successMessage = ''));

    this.changeSuccessMessage();
  }

  public changeSuccessMessage() {
    this._success.next(
      `${new Date().toLocaleDateString()} - Carefully read your latest consultation.`
    );
  }
}
