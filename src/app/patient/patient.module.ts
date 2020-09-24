import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementListComponent } from './measurement-list/measurement-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeasurementAddComponent } from './measurement-add/measurement-add.component';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { HeaderComponent } from '../header/header.component';
import { ConsultListComponent } from './consult-list/consult-list.component';

@NgModule({
  declarations: [
    MeasurementListComponent,
    MeasurementAddComponent,
    HeaderComponent,
    ConsultListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    GoogleChartsModule,
    BrowserAnimationsModule,
  ],
  exports: [MeasurementListComponent, ConsultListComponent],
})
export class PatientModule {}
