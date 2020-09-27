import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Measurement } from 'src/app/_shared/_models/measurement';
import { MeasurementService } from '../../_shared/_services/measurement.service';

@Component({
  selector: 'app-measurement-edit',
  templateUrl: './measurement-edit.component.html',
  styleUrls: ['./measurement-edit.component.scss']
})
export class MeasurementEditComponent implements OnInit {

  editMeasurementForm: FormGroup;
  measurement_id = '';
  glucose_level = '';
  carb_intake = '';
  isLoadingResults = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private measurementService: MeasurementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMeasuermentsById(this.route.snapshot.params.id);
    this.editMeasurementForm = this.formBuilder.group({
      glucose_level : [null, Validators.required],
      carb_intake : [null, Validators.required],
    });

  }

  getMeasuermentsById(id: any) {
    this.measurementService.getMeasurementsById(id).subscribe((data: any) => {
      this.measurement_id = data.measurement_id;
      this.editMeasurementForm.setValue({
        glucose_level: data.glucose_level,
        carb_intake: data.carb_intake,
      });
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.measurementService.updateMeasurements(this.measurement_id, this.editMeasurementForm.value)
      .subscribe((res: any) => {
          const id = res.measurement_id;
          console.log(id);
          this.isLoadingResults = false;
          this.router.navigate(['/patient/measurements/']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  measurementDetails() {
    this.router.navigate(['/patient/measurements', this.measurement_id]);
  }

  // getMeasurementDetails(measurement_id: number) {
  //   this.measurementService
  //     .getMeasurementById(measurement_id)
  //     .subscribe((data: any) => {
  //       this.measurements = data;
  //       console.log(this.measurement_id);
  //     });
  // }

}
