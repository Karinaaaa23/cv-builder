import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';  
import { GeneralInfoComponent } from './general-information.component';
import { ImageUploadModuleModule } from '../image-upload-component/image-upload.module';
import { WorkExperienceModule } from '../work-experience/work-experience.module';

@NgModule({
  declarations: [
     GeneralInfoComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadModuleModule,
    WorkExperienceModule,
  ],
  
  exports: [
    GeneralInfoComponent,
  ]
})
export class GeneralInfoModule { }
