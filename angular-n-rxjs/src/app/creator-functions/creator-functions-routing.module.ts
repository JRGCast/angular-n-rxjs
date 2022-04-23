import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';

export const routes: Routes = [
  { path: 'from', component: FromComponent },
  { path: 'of', component: OfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorFunctionsRoutingModule { }
