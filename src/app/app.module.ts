import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppTopBarModule } from './app-top-bar/app-top-bar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GeneralInfoModule } from './general-information/general-information.module';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AcademicBackgroundComponent } from './academic-background/academic-background.component';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
import { ProjectsAccomplishedComponent } from './projects-accomplished/projects-accomplished.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    AcademicBackgroundComponent,
    ProfessionalSkillsComponent,
    ProjectsAccomplishedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTopBarModule,
    GeneralInfoModule,
  ],

  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule {}

