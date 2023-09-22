import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicBackgroundComponent } from './academic-background.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    AcademicBackgroundComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports:[
    AcademicBackgroundComponent,
  ],


})
export class AcademicBackgroundModule { }
