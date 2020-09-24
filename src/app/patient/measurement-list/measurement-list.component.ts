import { Component, OnInit } from '@angular/core';
import { Measurement } from '../../_shared/_models/measurement';
import { MeasurementService } from '../../_shared/_services/measurement.service';
import { Router } from '@angular/router';
import { UserService } from '../../_shared/_services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_shared/_models/user';
@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss'],
})
export class MeasurementListComponent implements OnInit {
  url = 'http://localhost:9000/v1/team6/sacchon/measurements';
  // hard-coded dummy data(works)
  // data = [
  //   ['Firefox', 45.0],
  //   ['IE', 26.8],
  //   ['Chrome', 12.8],
  //   ['Safari', 8.5],
  //   ['Opera', 6.2],
  //   ['Others', 0.7],
  // ];

  loading = false;
  submitted = false;
  type = 'LineChart';
  title = 'Glucose level';
  chartColumns = ['Date', 'Glucose'];
  options = {
    hAxis: {
      title: 'Timeline',
    },
  };
  width = 950;
  height = 500;

  glucose_level = [];
  carb_intake = [];
  measurement_created_date = [];
  myData: any[] = [];
  measurements: Measurement[];
  users: User[];

  constructor(
    private measurementService: MeasurementService,
    private httpClient: HttpClient,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.measurementService.getMeasurements().subscribe((measurements) => {
      this.measurements = measurements;
      console.log(measurements);
    });

    this.measurementService.getMeasurements().subscribe((response) => {
      this.measurements = response;
      response.map((item) => {
        this.myData.push([item.measurement_created_date, item.glucose_level]);
      });
      console.log(this.myData);
      console.log(this.measurements);
    });
  }
}
