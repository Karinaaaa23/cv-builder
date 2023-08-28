import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload-component.module';



@NgModule({
  declarations: [
    ImageUploadComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ImageUploadComponent]
})
export class ImageUploadModuleModule { }
