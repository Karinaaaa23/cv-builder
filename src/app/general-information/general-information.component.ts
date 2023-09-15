import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'general-info',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss'],
})



export class GeneralInfoComponent{
  
}
