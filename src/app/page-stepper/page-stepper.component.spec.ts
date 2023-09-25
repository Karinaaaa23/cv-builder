import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStepperComponent } from './page-stepper.component';

describe('PageStepperComponent', () => {
  let component: PageStepperComponent;
  let fixture: ComponentFixture<PageStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageStepperComponent]
    });
    fixture = TestBed.createComponent(PageStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
