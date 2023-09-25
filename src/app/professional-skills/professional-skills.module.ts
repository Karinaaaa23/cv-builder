import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalSkillsComponent } from './professional-skills.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ProfessionalSkillsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProfessionalSkillsComponent,
  ]
})
export class ProfessionalSkillsModule { }
