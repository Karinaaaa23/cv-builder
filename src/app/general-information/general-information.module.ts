import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';  
import { GeneralInfoComponent } from './general-information.component';

@NgModule({
  declarations: [
     GeneralInfoComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
  exports: [
    GeneralInfoComponent,
  ]
})
export class GeneralInformationModule { }
