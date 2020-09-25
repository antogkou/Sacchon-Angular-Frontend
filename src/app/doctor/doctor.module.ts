import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ConsultAddComponent } from './consult-add/consult-add.component';
import { BrowserModule } from '@angular/platform-browser';
import { MeasurementAddComponent } from '../patient/measurement-add/measurement-add.component';
import { MeasurementEditComponent } from '../patient/measurement-edit/measurement-edit.component';

// const routes: Routes  = [
//   {
//     path: 'doctor',
//     component: DoctorComponent,
//     children: [
//       // { path: '', component: DoctorComponent },
//       { path: 'my-patients', component: DoctorComponent },
//       { path: 'patients-without-doctor', component: DoctorComponent },
//       // { path: 'consults', component: ConsultListComponent },
//       { path: 'consults/create', component: ConsultAddComponent },
//       // { path: 'consults/:id', component: ConsultListComponent },
//       // { path: 'consults/:id/edit', component: ConsultListComponent },
//     ],
//   },
// ]


@NgModule({
  declarations: [DoctorComponent, ConsultAddComponent, MeasurementAddComponent, MeasurementEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    // RouterModule.forRoot(routes),
  ],
  exports: [
    ConsultAddComponent, DoctorComponent
  ]
})
export class DoctorModule { }
