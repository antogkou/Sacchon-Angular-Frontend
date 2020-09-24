import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultAddComponent } from './consult-add.component';

describe('ConsultAddComponent', () => {
  let component: ConsultAddComponent;
  let fixture: ComponentFixture<ConsultAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
