import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { MeasurementService } from 'src/app/_shared/_services/measurement.service';
import { Measurement } from '../../_shared/_models/measurement'

@Component({
  selector: 'app-patients-detail',
  templateUrl: './patients-detail.component.html',
  styleUrls: ['./patients-detail.component.scss']
})
export class PatientsDetailComponent implements OnInit {

  glucose_level: [];
  carb_intake: [];
  created_date: [];
  myData: any[] = [];
  measurements: Measurement[];

  constructor(

    private router: Router,
    private measurementService: MeasurementService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getByPatientEmail(this.route.snapshot.params.email)
  }


  getByPatientEmail(email: string){
  this.measurementService.getMeasurementsByPatientsEmail(email).subscribe((response: any) => {
        console.log(response);
      });
  }

}


