import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ConsultAddComponent } from './consult-add/consult-add.component';
import { ActivePatientsComponent } from './active-patients-list/active-patients.component';
import { MeasurementAddComponent } from '../patient/measurement-add/measurement-add.component';
import { MeasurementEditComponent } from '../patient/measurement-edit/measurement-edit.component';
import { PatientsDetailComponent } from './patients-detail/patients-detail.component';
import { MyPatientsListComponent } from './my-patients-list/my-patients-list.component';


@NgModule({
  declarations: [DoctorComponent, ActivePatientsComponent,  ConsultAddComponent, MeasurementAddComponent, MeasurementEditComponent, PatientsDetailComponent, MyPatientsListComponent],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    ConsultAddComponent, DoctorComponent
  ]
})
export class DoctorModule { }
