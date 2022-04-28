import { NgModule } from '@angular/core';
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeableOperatorsRoutingModule { }