import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicBackgroundComponent } from './academic-background.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AcademicBackgroundComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports:[
    AcademicBackgroundComponent,
  ]
})
export class AcademicBackgroundModule { }
