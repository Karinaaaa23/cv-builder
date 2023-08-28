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
  // standalone: true,
  providers:[],
})



export class GeneralInfoComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
  
}
