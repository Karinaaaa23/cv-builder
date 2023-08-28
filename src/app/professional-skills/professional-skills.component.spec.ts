import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSkillsComponent } from './professional-skills.component';

describe('ProfessionalSkillsComponent', () => {
  let component: ProfessionalSkillsComponent;
  let fixture: ComponentFixture<ProfessionalSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalSkillsComponent]
    });
    fixture = TestBed.createComponent(ProfessionalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
