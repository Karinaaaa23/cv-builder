import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})

export class WorkExperienceComponent {

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month)),
    end: new FormControl(new Date(year, month)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month)),
    end: new FormControl(new Date(year, month)),
  });
}
