import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsDetailComponent } from './patients-detail.component';

describe('PatientsDetailComponent', () => {
  let component: PatientsDetailComponent;
  let fixture: ComponentFixture<PatientsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
