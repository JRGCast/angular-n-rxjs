import { Component } from '@angular/core';
import { routes as subjectRoutes } from './subjects-routing.module'

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {

  childLinks = subjectRoutes
}
