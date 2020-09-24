import { Component, OnInit } from '@angular/core';
import { Consult } from '../consult';
import { ConsultService } from '../consult.service';

@Component({
  selector: 'app-consult-list',
  templateUrl: './consult-list.component.html',
  styleUrls: ['./consult-list.component.scss']
})
export class ConsultListComponent implements OnInit {

  constructor(private consultService: ConsultService) { }

  consults: Consult[];

  ngOnInit(): void {
    this.consultService.getMeasurements().subscribe((consults) => {
      this.consults = consults;
      console.log(consults);
    });
  }

}
