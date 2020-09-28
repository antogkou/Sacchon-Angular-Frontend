import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultService } from 'src/app/_shared/_services/consult.service';

@Component({
  selector: 'app-consult-add',
  templateUrl: './consult-add.component.html',
  styleUrls: ['./consult-add.component.scss'],
})
export class ConsultAddComponent implements OnInit {
  addConsultForm: FormGroup;
  patientMail = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultService: ConsultService
  ) {}

  ngOnInit(): void {
    this.addConsultForm = new FormGroup({
      consultText: new FormControl('', Validators.required),
      dosage: new FormControl('', Validators.required),
      medication: new FormControl('', Validators.required),
    });
    this.patientMail = this.route.snapshot.params.email;
    console.log(this.patientMail)
  }

  // convenience getter for easy access to form fields
  get data() {
    return this.addConsultForm.controls;
  }

  onCreateConsult(patientMail) {
    if (this.addConsultForm.invalid) {
      return;
    } else {
      this.consultService
        .addConsult(this.addConsultForm.value, patientMail)
        .subscribe((r) => {
          this.router.navigate(['/doctor/my-patients/consult/',patientMail]);
        });
    }
  }
}
