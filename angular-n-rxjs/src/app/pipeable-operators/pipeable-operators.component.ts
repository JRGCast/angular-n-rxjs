import { Component, OnInit } from '@angular/core';
import { routes as childRoutes } from './pipeable-operators-routing.module';

@Component({
  selector: 'app-pipeable-operators',
  templateUrl: './pipeable-operators.component.html',
  styleUrls: ['./pipeable-operators.component.scss']
})
export class PipeableOperatorsComponent implements OnInit {

  childLinks = childRoutes;

  constructor() { }

  ngOnInit(): void {
    /*
    Pipeable operators são aqueles operadores que ficarão entre o observable e o subscribe, manipulando a stream de dados de acordo com o que for desejado.
    O .pipe está disponível em todos os observables.
    */
  }

}
