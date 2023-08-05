import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralInformationComponent,
    AppTopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
