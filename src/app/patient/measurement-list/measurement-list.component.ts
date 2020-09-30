import { Component, OnInit } from '@angular/core';
import { Measurement } from '../../_shared/_models/measurement';
import { MeasurementService } from '../../_shared/_services/measurement.service';
import { UserService } from '../../_shared/_services/user.service';
import { User } from 'src/app/_shared/_models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ChartsModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss'],
})
export class MeasurementListComponent implements OnInit {
  url = 'http://localhost:9000/v1/team6/sacchon/measurements';

  showChart = false;
  showAvg = false;
  formDateAvg = false;
  patientFullData = true;
  avgCarb = 0;
  avgGlucose = 0;
  page = 1;
  pageSize = 5;
  dateForm: FormGroup;

  startDate = new FormControl();
  endDate = new FormControl();

  loading = false;
  submitted = false;
  type = 'LineChart';
  title = 'Glucose level';
  chartColumns = ['Date', 'Glucose', 'Carb Intake'];
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

  // ngOnDestroy(): void {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //     console.log('ngOnDestroy called');
  //   }
  // }

  showCharts(): void {
    this.showChart = !this.showChart;
  }

  // showAverages(): void {
  //   this.showAvg = !this.showAvg;
  // }

  getMeasurements(): void {
    this.measurementService
      .getCurrentUserMeasurements()
      .subscribe((response) => {
        this.measurements = response;
        response.map((item) => {
          this.myGraphData.push([
            new Date(item.created_date)
              .toISOString()
              .replace('-', '/')
              .split('T')[0]
              .replace('-', '/'),
            item.glucose_level,
            item.carb_intake,
          ]);
        });
        console.log(this.measurements);
      });
  }

  getMeasurementsByDate() {
    console.log(
      'start= ' + this.dateForm.get('startDate').value,
      'end= ' + this.dateForm.get('endDate').value
    );
    this.measurementService
      .getMeasurementsByDate2(
        this.dateForm.get('startDate').value,
        this.dateForm.get('endDate').value
      )
      .subscribe((response: any) => {
        this.measurementsByDate = response.measurements;
        this.avgCarb = response.avgCarb;
        this.avgGlucose = response.avgGlucose;
        this.showAvg = true;
        console.log(this.measurements);
        console.log('response is: ' + response);
      });
  }

  deleteMeasurements(id: any) {
    this.isLoadingResults = true;
    this.measurementService.deleteMeasurements(id).subscribe(
      (res) => {
        this.isLoadingResults = false;
        //  location.reload();
        window.location.reload();
        this.getMeasurements();
        //this.router.navigate(['patient/measurements']);
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  switchToDateAvg(): void {
    this.formDateAvg = !this.formDateAvg;
    this.patientFullData = !this.patientFullData;
  }
}
