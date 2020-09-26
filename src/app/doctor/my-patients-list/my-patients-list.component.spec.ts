import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPatientsListComponent } from './my-patients-list.component';

describe('MyPatientsListComponent', () => {
  let component: MyPatientsListComponent;
  let fixture: ComponentFixture<MyPatientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPatientsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPatientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
