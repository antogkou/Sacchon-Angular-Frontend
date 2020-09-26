import { Component, OnInit } from '@angular/core';
import { Measurement } from '../../_shared/_models/measurement';
import { MeasurementService } from '../../_shared/_services/measurement.service';
import { UserService } from '../../_shared/_services/user.service';
import { User } from 'src/app/_shared/_models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss'],
})
export class MeasurementListComponent implements OnInit {
  url = 'http://localhost:9000/v1/team6/sacchon/measurements';

  dateForm: FormGroup;

  startDate: '2020-09-25';
  endDate: '2020-09-27';

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

  myData: any[] = [];
  measurements: Measurement[];
  users: User[];

  isLoadingResults = true;

  constructor(
    private measurementService: MeasurementService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    // this.dateForm = new FormGroup({
    //   startDate: new FormControl(null, Validators.required),
    //   endDate: new FormControl(null, Validators.required)
    // });
    this.getMeasurements();
  }

  getMeasurements() {
    this.measurementService
      .getCurrentUserMeasurements()
      .subscribe((response) => {
        this.measurements = response;
        response.map((item) => {
          this.myData.push([item.created_date, item.glucose_level]);
        });
        console.log(this.measurements);
      });
  }

  getMeasurementsByDate(startDate: Date, endDate: Date) {
    this.measurementService
      .getMeasurementsByDate(startDate, endDate)
      .subscribe((response) => {
        // this.dateForm.setValue(startDate, endDate)
        console.log(response);
      });
  }

  deleteCases(id: any) {
    this.isLoadingResults = true;
    this.measurementService.deleteMeasurements(id).subscribe(
      (res) => {
        this.isLoadingResults = false;
        //  location.reload();
        this.getMeasurements();
        //this.router.navigate(['patient/measurements']);
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
