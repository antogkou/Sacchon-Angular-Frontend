import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultService } from 'src/app/_shared/_services/consult.service';
import { MeasurementService } from '../../_shared/_services/measurement.service';

@Component({
  selector: 'app-consult-add',
  templateUrl: './consult-add.component.html',
  styleUrls: ['./consult-add.component.scss'],
})
export class ConsultAddComponent implements OnInit {
  addConsultForm: FormGroup;
  constructor(
    private router: Router,
    private consultService: ConsultService
  ) {}

  ngOnInit(): void {
    this.addConsultForm = new FormGroup({
      consultText: new FormControl('', Validators.required),
      dosage: new FormControl('', Validators.required),
      medication: new FormControl('', Validators.required),
    });
  }

  // convenience getter for easy access to form fields
  get data() {
    return this.addConsultForm.controls;
  }

  onCreateConsult() {
    if (this.addConsultForm.invalid) {
      return;
    } else {
      this.consultService
        .addConsult(this.addConsultForm.value)
        .subscribe((r) => {
          this.router.navigate(['/doctor']);
        });
    }
  }
}
