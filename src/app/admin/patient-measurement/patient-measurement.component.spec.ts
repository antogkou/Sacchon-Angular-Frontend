import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMeasurementComponent } from './patient-measurement.component';

describe('PatientMeasurementComponent', () => {
  let component: PatientMeasurementComponent;
  let fixture: ComponentFixture<PatientMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientMeasurementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
