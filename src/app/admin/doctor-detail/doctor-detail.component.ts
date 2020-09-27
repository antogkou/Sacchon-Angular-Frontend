import { Component, OnInit } from '@angular/core';
import { Consult } from 'src/app/_shared/_models/consult';
import { ConsultService } from 'src/app/_shared/_services/consult.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {
  consult: Consult[];

  constructor(public consultService: ConsultService) { }

  ngOnInit(): void {

    this.consultService.getConsult
  }

}
