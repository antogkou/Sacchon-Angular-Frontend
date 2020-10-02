import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Measurement } from 'src/app/_shared/_models/measurement';
import { User } from 'src/app/_shared/_models/user';
import { MeasurementService } from 'src/app/_shared/_services/measurement.service';
import { UserService } from 'src/app/_shared/_services/user.service';
import { Consult } from 'src/app/_shared/_models/consult';
import { ConsultService } from 'src/app/_shared/_services/consult.service';
@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
})
export class PatientDetailComponent implements OnInit {
  user: User;
  page = 1;
  pageSize = 5;
  measurements: Measurement[];
  consults: Consult[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private measurementService: MeasurementService,
    private consultService: ConsultService
  ) {}

  ngOnInit(): void {
    this.getMeasurementsByPatientEmail(this.route.snapshot.params.email);
    this.getConsultsByPatientEmail(this.route.snapshot.params.email);
    console.log('got patient inside of patient-detail');
  }

  getPatient(email: string): void {
    console.log(this.route.snapshot.params.email);
    this.userService.getPatientData(this.route.snapshot.params.email).subscribe((response) => {
      this.user = response;
      console.log(this.user);
    });
  }

  getMeasurementsByPatientEmail(email: string) {
    this.measurementService
      .getMeasurementsByPatientsEmail(email)
      .subscribe((response: any) => {
        this.measurements = response;
        console.log(response);
      });
  }

  getConsultsByPatientEmail(email: string) {
    this.consultService
      .getConsultByPatientEmail(this.route.snapshot.params.email)
      .subscribe((response: any) => {
        this.consults = response;
        console.log(response);
      });
  }
}
