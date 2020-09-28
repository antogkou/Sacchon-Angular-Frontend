import { Component, OnInit } from '@angular/core';
import { Measurement } from '../../_shared/_models/measurement';
import { MeasurementService } from '../../_shared/_services/measurement.service';
import { UserService } from '../../_shared/_services/user.service';
import { User } from 'src/app/_shared/_models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss'],
})
export class MeasurementListComponent implements OnInit {
  url = 'http://localhost:9000/v1/team6/sacchon/measurements';

  showChart = false;
  hideTable = true;

  dateForm: FormGroup;
  startDate = new FormControl();
  endDate = new FormControl();

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

  myGraphData: any[] = [];
  measurements: Measurement[];
  measurementsByDate: Measurement[];
  users: User[];

  isLoadingResults = true;
  subscription: Subscription;

  constructor(
    private measurementService: MeasurementService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.dateForm = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl(),
    });
    this.getMeasurements();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('ngOnDestroy called');
    }
  }


  showCharts(): void {
    this.showChart = !this.showChart;
  }

  getMeasurements(): void {
    this.measurementService
      .getCurrentUserMeasurements()
      .subscribe((response) => {
        // sets the table values
        this.measurements = response;
        // updates the graph
        response.map((item) => {
          this.myGraphData.push([item.created_date, item.glucose_level]);
        });
        console.log(this.measurements);
      });
  }

  getMeasurementsByDate(): void {
    console.log(
      'start= ' + this.dateForm.get('startDate').value,
      'end= ' + this.dateForm.get('endDate').value
    );
    this.measurementService
      .getMeasurementsByDate(
        this.dateForm.get('startDate').value,
        this.dateForm.get('endDate').value
      )
      .subscribe((response) => {
        if (response.length > 0) {
          this.measurements = response;
        } else {
          console.log('getMeasurementsByDate failed');
        }
        console.log('response is: ' + response);
      });
  }

  deleteMeasurements(id: any): void {
    this.isLoadingResults = true;
    this.measurementService.deleteMeasurements(id).subscribe(
      (res) => {
        this.isLoadingResults = false;
        this.getMeasurements();
        // this.router.navigate(['patient/measurements']);
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
