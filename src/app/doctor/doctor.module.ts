import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ConsultAddComponent } from './consult-add/consult-add.component';
import { ActivePatientsComponent } from './active-patients-list/active-patients.component';
import { PatientsDetailComponent } from './patients-detail/patients-detail.component';
import { MyPatientsListComponent } from './my-patients-list/my-patients-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatCard } from '@angular/material/card';
import { PatientConsultListComponent } from './patient-consult-list/patient-consult-list.component';
import { ConsultEditComponent } from './consult-edit/consult-edit.component';

@NgModule({
  declarations: [
    DoctorComponent,
    ActivePatientsComponent,
    ConsultAddComponent,
    PatientsDetailComponent,
    MyPatientsListComponent,
    PatientConsultListComponent,
    ConsultEditComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    ConsultAddComponent,
    DoctorComponent,
    PatientsDetailComponent,
    ActivePatientsComponent,
    DoctorComponent,
    MyPatientsListComponent,
    PatientConsultListComponent
  ],
})
export class DoctorModule {}
