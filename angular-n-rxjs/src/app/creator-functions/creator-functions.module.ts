import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorFunctionsRoutingModule } from './creator-functions-routing.module';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';
import { FromEventComponent } from './from-event/from-event.component';
import { TimerComponent } from './timer/timer.component';
import { IntervalComponent } from './interval/interval.component';


@NgModule({
  declarations: [
    FromComponent,
    OfComponent,
    FromEventComponent,
    TimerComponent,
    IntervalComponent
  ],
  imports: [
    CommonModule,
    CreatorFunctionsRoutingModule
  ]
})
export class CreatorFunctionsModule { }
