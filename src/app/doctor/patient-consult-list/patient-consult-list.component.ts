import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consult } from 'src/app/_shared/_models/consult';
import { ConsultService } from 'src/app/_shared/_services/consult.service';

@Component({
  selector: 'app-patient-consult-list',
  templateUrl: './patient-consult-list.component.html',
  styleUrls: ['./patient-consult-list.component.scss']
})
export class PatientConsultListComponent implements OnInit {

  myData: any[] = [];
  consults: Consult[];

  constructor(
    private consultService: ConsultService,
    private HttpClient : HttpClient,
    private router : Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMeasurementsByPatientsEmail(this.route.snapshot.params.email)  
  }

  getMeasurementsByPatientsEmail(email : string){
    this.consultService.getConsultByPatientEmail(email)
    .subscribe((response : any) =>{
      this.consults = response;
      console.log(response);
    });
  }

}
