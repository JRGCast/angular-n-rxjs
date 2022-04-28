import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { MapComponent } from './map/map.component';
import { TapComponent } from './tap/tap.component';

export const routes: Routes = [
  { path: 'filter', component: FilterComponent },
  { path: 'map', component: MapComponent },
  { path: 'tap', component: TapComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, BrowserModule],
  exports: [RouterModule, CommonModule, BrowserModule]
})
export class PipeableOperatorsRoutingModule { }