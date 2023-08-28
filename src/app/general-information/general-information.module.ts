import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { GeneralInfoComponent } from './general-information.component';
import { ImageUploadModuleModule } from '../image-upload-component/image-upload.module';
import { WorkExperienceModule } from '../work-experience/work-experience.module';

@NgModule({
  declarations: [
     GeneralInfoComponent,
  ],
  imports: [
    ImageUploadModuleModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    WorkExperienceModule,
  ],
  
  exports: [
    GeneralInfoComponent,
  ]
})
export class GeneralInfoModule { }
