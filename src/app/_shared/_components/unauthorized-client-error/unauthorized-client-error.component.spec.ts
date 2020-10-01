import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedClientErrorComponent } from './unauthorized-client-error.component';

describe('UnauthorizedClientErrorComponent', () => {
  let component: UnauthorizedClientErrorComponent;
  let fixture: ComponentFixture<UnauthorizedClientErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedClientErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedClientErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
