import { Component, OnInit } from '@angular/core';
import { Measurement } from '../measurement';
import { MeasurementService } from '../measurement.service';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss'],
})
export class MeasurementListComponent implements OnInit {
  constructor(private measurementService: MeasurementService) {}

  measurements: Measurement[];

  ngOnInit(): void {
    this.measurementService.getMeasurements().subscribe((measurements) => {
      this.measurements = measurements;
      console.log(measurements);
    });
  }
}
