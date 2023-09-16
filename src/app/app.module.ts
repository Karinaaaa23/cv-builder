import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppTopBarModule } from './app-top-bar/app-top-bar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralInfoModule } from './general-information/general-information.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfessionalSkillsModule } from './professional-skills/professional-skills.module';
import { AcademicBackgroundModule } from './academic-background/academic-background.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AppTopBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    GeneralInfoModule,
    WorkExperienceModule,
    AcademicBackgroundModule,
    ProfessionalSkillsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

