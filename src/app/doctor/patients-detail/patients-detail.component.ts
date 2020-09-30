import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultService } from 'src/app/_shared/_services/consult.service';
import { MeasurementService } from 'src/app/_shared/_services/measurement.service';
import { Measurement } from '../../_shared/_models/measurement';

@Component({
  selector: 'app-patients-detail',
  templateUrl: './patients-detail.component.html',
  styleUrls: ['./patients-detail.component.scss'],
})
export class PatientsDetailComponent implements OnInit {
  myData: any[] = [];
  measurements: Measurement[];
  
  constructor(
    private router: Router,
    private measurementService: MeasurementService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getMeasurementsByPatientEmail(this.route.snapshot.params.email);
   
  }

  getMeasurementsByPatientEmail(email: string) {
    this.measurementService
      .getMeasurementsByPatientsEmail(email)
      .subscribe((response: any) => {
        this.measurements = response;
        console.log(response);
      });
  }

 
}
