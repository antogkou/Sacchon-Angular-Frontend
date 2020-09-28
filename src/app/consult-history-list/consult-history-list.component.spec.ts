import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultHistoryListComponent } from './consult-history-list.component';

describe('ConsultHistoryListComponent', () => {
  let component: ConsultHistoryListComponent;
  let fixture: ComponentFixture<ConsultHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
