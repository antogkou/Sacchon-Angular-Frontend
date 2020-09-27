import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { PatientComponent } from '../patient/patient.component';
import { PatientMeasurementComponent } from './patient-measurement/patient-measurement.component';



@NgModule({
  declarations: [
    AdminComponent,
    PatientMeasurementComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    AdminComponent,
    PatientMeasurementComponent
  ]
})
export class AdminModule { }
