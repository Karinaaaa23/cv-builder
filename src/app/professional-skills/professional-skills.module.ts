import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalSkillsComponent } from './professional-skills.component';



@NgModule({
  declarations: [
    ProfessionalSkillsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProfessionalSkillsComponent,
  ]
})
export class ProfessionalSkillsModule { }
