import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GeneralInfoComponent } from './general-information.component';
import { ImageUploadModuleModule } from '../image-upload-component/image-upload.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GeneralInfoComponent,
  ],
  imports: [
    ImageUploadModuleModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],

  exports: [
    GeneralInfoComponent,
  ]
})
export class GeneralInfoModule { }
