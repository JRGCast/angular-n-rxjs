import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { routes as childRoutes } from './creator-functions-routing.module';

@Component({
  selector: 'app-creator-functions',
  templateUrl: './creator-functions.component.html',
  styleUrls: ['./creator-functions.component.scss']
})
export class CreatorFunctionsComponent implements OnInit {

  childLinks = childRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
