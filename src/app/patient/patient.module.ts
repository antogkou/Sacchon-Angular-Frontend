import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementListComponent } from './measurement-list/measurement-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MeasurementListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MeasurementListComponent],
})
export class PatientModule {}
