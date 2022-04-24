import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { FromComponent } from './from/from.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { TimerComponent } from './timer/timer.component';

export const routes: Routes = [
  { path: 'from', component: FromComponent },
  { path: 'of', component: OfComponent },
  { path: 'fromEvent', component: FromEventComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'interval', component: IntervalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorFunctionsRoutingModule { }
