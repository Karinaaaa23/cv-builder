import { LiveAnnouncer } from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

export interface technologiesStack{
  name: string;
}

@Component({
  selector: 'app-projects-accomplished',
  templateUrl: './projects-accomplished.component.html',
  styleUrls: ['./projects-accomplished.component.scss']
})
export class ProjectsAccomplishedComponent {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  technologies: technologiesStack[] = [{name: 'JavaScript'},
  {name: "TypeScript"},
  {name: ".Net"},
  {name: "Java"}
];

announcer = inject(LiveAnnouncer);



  startOfWork = new FormGroup({
    start: new FormControl(new Date(year, month)),
    end: new FormControl(new Date(year, month)),
  });

  endOfWork = new FormGroup({
    start: new FormControl(new Date(year, month)),
    end: new FormControl(new Date(year, month)),
  });


  // Add a new technology 

  add(event: MatChipInputEvent): void{
    const technology = (event.value || '').trim();

    if(technology){
      this.technologies.push({name: technology});
    }

    event.chipInput!.clear();
  }

  remove (technology: technologiesStack){
    const index = this.technologies.indexOf(technology);

    if (index >= 0){
      this.technologies.splice(index, 1);

      this.announcer.announce('Removed ${technology}');
    }
  }

  edit(technology:technologiesStack, event: MatChipEditedEvent){
    const editeTech = event.value.trim();

    if(!editeTech){
      this.remove(technology);
      return;
    }

    const index = this.technologies.indexOf(technology);
    if(index >=0){
      this.technologies[index].name=editeTech;
    }

  }







  
}
