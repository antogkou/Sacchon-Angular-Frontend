import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Measurement } from '../measurement';
import { MeasurementService } from '../measurement.service';

@Component({
  selector: 'app-measurement-add',
  templateUrl: './measurement-add.component.html',
  styleUrls: ['./measurement-add.component.scss']
})
export class MeasurementAddComponent implements OnInit {
  addMeasurementForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private measurementService: MeasurementService
  ) { }

  ngOnInit(): void {
    this.addMeasurementForm = this.formBuilder.group({
      glucose_level: ['', Validators.required],
      carb_intake: ['', Validators.required]
    })
  }

  get data() {
    return this.addMeasurementForm.controls;
  }

  onCreateMeasurement(){
    if (this.addMeasurementForm.invalid) {
      return;
    } else {
      this.measurementService.addMeasurement(this.addMeasurementForm.value).subscribe(r => {
        this.router.navigate(['/home']);
      })
        this._snackBar.open('Measurement logged Successfully', 'Success', {
         duration: 2000,
          });
    }
  }

  // add(): void {
  //   if (this.addMeasurementForm.invalid) { return; }
  //   this.measurementService.addMeasurement(this.addMeasurementForm.value)
  //     .subscribe(hero => {
  //       this.router.navigate(['/home']);
  //     });
  // }


}
