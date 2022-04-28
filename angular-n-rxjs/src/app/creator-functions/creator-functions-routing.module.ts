import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CombineLastComponent } from './combine-last/combine-last.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
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
  { path: 'interval', component: IntervalComponent },
  { path: 'forkJoin', component: ForkJoinComponent },
  { path: 'combineLast', component: CombineLastComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, BrowserModule],
  exports: [RouterModule, CommonModule, BrowserModule],
})
export class CreatorFunctionsRoutingModule { }
