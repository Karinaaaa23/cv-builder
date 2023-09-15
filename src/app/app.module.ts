import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppTopBarModule } from './app-top-bar/app-top-bar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralInfoModule } from './general-information/general-information.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTopBarModule,
    GeneralInfoModule,
    WorkExperienceModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

