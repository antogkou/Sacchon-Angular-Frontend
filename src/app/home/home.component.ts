import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { User } from '../user-account/_models/user';
import { UserService } from '../user-account/user.service';

import { Chart } from 'chart.js';
// import { multi } from '../data';
import { HttpClient } from '@angular/common/http';
import { MeasurementService } from '../patient/measurement.service';
import { Measurement } from '../patient/measurement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  url = 'http://localhost:9000/v1/team6/sacchon/measurements';

  type = 'LineChart';
  title = 'Glucose level';
  data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7],
  ];
  chartColumns = ['Glucose', 'Carb Intake'];
  options = {};
  width = 750;
  height = 400;

  glucose_level = [];
  carb_intake = [];
  measurement_created_date = [];
  measurements: Measurement[];
  dataTable: any;
  users: User[];

  // End of Chart Test

  constructor(
    private httpClient: HttpClient,
    public userService: UserService,
    private router: Router,
    private measurementService: MeasurementService
  ) {
    // Object.assign(this, { multi });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
    });

    this.measurementService.getMeasurements().subscribe((response) => {
      this.measurements = response;
      response.map(item => {
        this.data.push([item.carb_intake, item.measurement_created_date]);
      })
      console.log(this.measurements);
    });

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('account');
    console.log('user logged out');
    this.router.navigate(['']);
  }
}

// get data() {
//   return this.loginForm.controls;
// }

// onLogout(){
//   //debugger
//   this.userService.login(this.data.email.value, this.data.password.value).subscribe(a => {
//     this.router.navigate(['/home']);
//   })
// }

//charts start
// onSelect(data): void {
//   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
// }

// onActivate(data): void {
//   console.log('Activate', JSON.parse(JSON.stringify(data)));
// }

// onDeactivate(data): void {
//   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
// }
//charts end
