import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-account/login/login.component';
import { RegisterComponent } from './user-account/register/register.component';
import { HomeComponent } from './home/home.component';
import { MeasurementListComponent } from './patient/measurement-list/measurement-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { MeasurementAddComponent } from './patient/measurement-add/measurement-add.component';
import { HeaderComponent } from './_shared/_components/header/header.component';
import { ConsultListComponent } from './patient/consult-list/consult-list.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './_shared/_components/footer/footer.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdminComponent } from './admin/admin.component';
import { ConsultAddComponent } from './doctor/consult-add/consult-add.component';
import { ActivePatientsComponent } from './doctor/active-patients-list/active-patients.component';
import { MeasurementEditComponent } from './patient/measurement-edit/measurement-edit.component';
import { PatientModule } from './patient/patient.module';
import { PatientsDetailComponent } from './doctor/patients-detail/patients-detail.component';
import { MyPatientsListComponent } from './doctor/my-patients-list/my-patients-list.component';
import { DoctorModule } from './doctor/doctor.module';
import { PatientMeasurementComponent } from './admin/patient-measurement/patient-measurement.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  // { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page

  {
    path: 'patient',
    component: PatientComponent,
    children: [
      { path: 'measurements', component: MeasurementListComponent },
      { path: 'measurements/create', component: MeasurementAddComponent },
      { path: 'measurements/:id', component: MeasurementEditComponent },
      { path: 'consult', component: ConsultListComponent },
    ],
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    children: [
      // { path: '', component: DoctorComponent },
      // { path: 'my-patients', component: DoctorComponent },
      { path: 'patients-without-doctor', component: ActivePatientsComponent},
      { path: 'my-patients', component : MyPatientsListComponent},
      { path: 'consults', component: ConsultListComponent },
      { path: 'consults/create', component: ConsultAddComponent },
      { path: 'consults/:id', component: ConsultListComponent },
      { path: 'consults/:id/edit', component: ConsultListComponent },
      { path: 'patients-without-doctor/:email', component: PatientsDetailComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      // { path: '', component: DoctorComponent },
      { path: 'all-users', component: AdminComponent },
      { path: 'patient-data/:email', component: PatientMeasurementComponent},
      { path: 'doctor-data', component: ConsultListComponent },
      { path: 'patients-without-doctor', component: ConsultListComponent },
      { path: 'consults', component: ConsultListComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AdminModule,
    PatientModule,
    DoctorModule,
    AdminModule,
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
    BrowserAnimationsModule,
    GoogleChartsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
