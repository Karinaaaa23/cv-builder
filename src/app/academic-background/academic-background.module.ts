import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicBackgroundComponent } from './academic-background.component';



@NgModule({
  declarations: [
    AcademicBackgroundComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AcademicBackgroundComponent,
  ]
})
export class AcademicBackgroundModule { }
