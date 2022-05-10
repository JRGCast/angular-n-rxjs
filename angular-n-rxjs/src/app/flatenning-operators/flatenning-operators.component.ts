import { Component, OnInit } from '@angular/core';
import { routes as flatenningRoutes } from './flatenning-operators-routing.module'

@Component({
  selector: 'app-flatenning-operators',
  templateUrl: './flatenning-operators.component.html',
  styleUrls: ['./flatenning-operators.component.scss']
})
export class FlatenningOperatorsComponent implements OnInit {

  childLinks = flatenningRoutes
  constructor() { }

  /* flattening operators funcionam de maneira semelhante ao catchError, porém, ao invés de só atuar no error, fará uma subscrição interna com valores emitidos no next, e aparentemente reemite valores error e complete.
  A grande diferença entre os diversos flattening operatos é como eles reagem à concurrency, isto é, aos dados que chegam
  */

  ngOnInit(): void {
  }

}
