import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';



@NgModule({
  declarations: [
    AdminComponent,
    PatientDetailComponent,
    PatientListComponent,
    DoctorListComponent,
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
    PatientDetailComponent,
    PatientListComponent
  ]
})
export class AdminModule { }
