import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consult } from 'src/app/_shared/_models/consult';
import { ConsultService } from 'src/app/_shared/_services/consult.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss'],
})
export class DoctorDetailComponent implements OnInit {
  consults: any[] = [];
  page = 1;
  pageSize = 5;
  constructor(
    public consultService: ConsultService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDoctorConsults(this.route.snapshot.params.email);
  }

  getDoctorConsults(email: string): void {
    this.consultService
      .getConsultByDoctorEmail(email)
      .subscribe((response: any) => {
        this.consults = response;
        console.log(this.consults);
      });
  }
  
}
