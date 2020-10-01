import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consult } from '../../_shared/_models/consult';
import { ConsultService } from '../../_shared/_services/consult.service';

@Component({
  selector: 'app-consult-history-list',
  templateUrl: './consult-history-list.component.html',
  styleUrls: ['./consult-history-list.component.scss'],
})
export class ConsultHistoryListComponent implements OnInit {

  myData: any[] = [];
  consults: Consult[];

  constructor(
    private consultService: ConsultService,
  ) {}

  ngOnInit(): void {
    this.consultService.getConsultByDoctor().subscribe((response) => {
      this.consults = response;
      response.map((item) => {
        this.myData.push([
          item.patient_email,
          item.consultText,
          item.medication,
          item.medication,
          item.consult_date,
        ]);
      });
    });
  }
}
