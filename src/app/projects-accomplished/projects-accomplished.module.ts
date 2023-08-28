import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsAccomplishedComponent } from './projects-accomplished.component';



@NgModule({
  declarations: [
    ProjectsAccomplishedComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[   
    ProjectsAccomplishedComponent,
  ]
})
export class ProjectsAccomplishedModule { }
