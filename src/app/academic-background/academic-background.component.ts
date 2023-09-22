import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// import * as _moment from 'moment';
// import {default as _rollupMoment, Moment} from 'moment';

// const moment = _rollupMoment || _moment;

// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'MM/YYYY',
//   },
//   display: {
//     dateInput: 'MM/YYYY',
//     monthYearLabel: 'MMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };
const studyPeriod = new Date();
const month = studyPeriod.getMonth();
const year = studyPeriod.getFullYear();
@Component({
  selector: 'app-academic-background',
  templateUrl: './academic-background.component.html',
  styleUrls: ['./academic-background.component.scss'],
  // providers:[
  //   {
  //     provide: DateAdapter,
  //     useClass: MomentDateAdapter,
  //     deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  //   },
  //   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  // ],
})
export class AcademicBackgroundComponent {
  // date = new FormControl(moment());

  // setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
  //   const ctrlValue = this.date.value!;
  //   ctrlValue.month(normalizedMonthAndYear.month());
  //   ctrlValue.year(normalizedMonthAndYear.year());
  //   this.date.setValue(ctrlValue);
  //   datepicker.close();
  // }

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month)),
    end: new FormControl(new Date(year, month)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month)),
    end: new FormControl(new Date(year, month)),
  });
}
