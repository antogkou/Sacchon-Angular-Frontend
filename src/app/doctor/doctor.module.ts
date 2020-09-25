import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ConsultAddComponent } from './consult-add/consult-add.component';
import { BrowserModule } from '@angular/platform-browser';
import { ActivePatientsComponent } from './active-patients/active-patients.component';



@NgModule({
  declarations: [DoctorComponent,ConsultAddComponent, ActivePatientsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    ConsultAddComponent, DoctorComponent
  ]
})
export class DoctorModule { }
