import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { PatientMeasurementComponent } from './patient-measurement/patient-measurement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientListComponent } from './patient-list/patient-list.component';



@NgModule({
  declarations: [
    AdminComponent,
    PatientMeasurementComponent,
    PatientListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [
    AdminComponent,
    PatientMeasurementComponent,
    PatientListComponent
  ]
})
export class AdminModule { }
