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
import { PageStepperComponent } from './page-stepper/page-stepper.component';
import { ProjectsAccomplishedModule } from './projects-accomplished/projects-accomplished.module';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
// import { PageStepperModule } from './page-stepper/page-stepper.module';
// import { PageStepperModule } from './page-stepper/page-stepper.module';
@NgModule({
  declarations: [
    AppComponent,
    AdditionalInfoComponent,
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
    ProjectsAccomplishedModule,
    // PageStepperModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

