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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { MeasurementAddComponent } from './patient/measurement-add/measurement-add.component';
import { HeaderComponent } from './header/header.component';
import { ConsultListComponent } from './patient/consult-list/consult-list.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: '',  redirectTo: 'login', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'measurements', component: MeasurementListComponent },
  { path: 'measurements/create', component: MeasurementAddComponent },
  { path: 'consult', component: ConsultListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MeasurementAddComponent,
    MeasurementListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
