import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientConsultListComponent } from './patient-consult-list.component';

describe('PatientConsultListComponent', () => {
  let component: PatientConsultListComponent;
  let fixture: ComponentFixture<PatientConsultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientConsultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientConsultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
