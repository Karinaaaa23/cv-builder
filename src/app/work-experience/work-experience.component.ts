import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  //standalone: true,
})

export class WorkExperienceComponent {

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
}
