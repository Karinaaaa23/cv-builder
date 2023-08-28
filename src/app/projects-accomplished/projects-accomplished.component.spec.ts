import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAccomplishedComponent } from './projects-accomplished.component';

describe('ProjectsAccomplishedComponent', () => {
  let component: ProjectsAccomplishedComponent;
  let fixture: ComponentFixture<ProjectsAccomplishedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsAccomplishedComponent]
    });
    fixture = TestBed.createComponent(ProjectsAccomplishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
