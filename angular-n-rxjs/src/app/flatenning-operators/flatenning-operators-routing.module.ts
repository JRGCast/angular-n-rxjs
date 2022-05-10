import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

export const routes: Routes = [
  { path: 'concatMap', component: ConcatMapComponent },
  { path: 'switchMap', component: SwitchMapComponent },
  { path: 'mergeMap', component: MergeMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlatenningOperatorsRoutingModule { }
