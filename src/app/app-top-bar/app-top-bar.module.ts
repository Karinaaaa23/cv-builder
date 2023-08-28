import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppTopBarComponent } from "./app-top-bar.component";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";


@NgModule({

declarations:[AppTopBarComponent],
imports:[
    
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
],
exports:[AppTopBarComponent]

})

export class AppTopBarModule{}