import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultService } from 'src/app/_shared/_services/consult.service';

@Component({
  selector: 'app-consult-edit',
  templateUrl: './consult-edit.component.html',
  styleUrls: ['./consult-edit.component.scss']
})
export class ConsultEditComponent implements OnInit {

  editConsultForm : FormGroup;
  consult_id = '';
  consultText = '';
  medication = '';
  dosage = '';
  email = '';
  isLoadingResults = false;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private consultService : ConsultService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getConsultById(this.route.snapshot.params.id);
    console.log(this.route.snapshot.params.id)
    this.editConsultForm = this.formBuilder.group({
      consultText : [null, Validators.required],
      medication : [null, Validators.required],
      dosage : [null,Validators.required]
    });
  }

  getConsultById(id: any) {
    this.consultService.getConsultById(id).subscribe((data: any) => {
      this.consult_id = data.consult_id;
      this.editConsultForm.setValue({
        consultText: data.consultText,
        medication: data.medication,
        dosage: data.dosage,
      });
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.consultService.updateConsult(this.consult_id, this.editConsultForm.value)
      .subscribe((res: any) => {
          const id = res.consult_id;
          const email = res.patient_email;
          this.isLoadingResults = false;
          this.router.navigate(['/doctor/my-patients/consult/',email]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
