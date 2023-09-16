import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalSkillsComponent } from './professional-skills.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfessionalSkillsComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProfessionalSkillsComponent,
  ]
})
export class ProfessionalSkillsModule { }
