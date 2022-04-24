import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttentionComponent } from './attention/attention.component';
import { CreatorFunctionsComponent } from './creator-functions/creator-functions.component';
import { FromEventComponent } from './creator-functions/from-event/from-event.component';
import { FromComponent } from './creator-functions/from/from.component';
import { OfComponent } from './creator-functions/of/of.component';
import { HotNColdObsComponent } from './hot-ncold-obs/hot-ncold-obs.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { routes as creatorFuncRoutes } from './creator-functions/creator-functions-routing.module';

export const routes: Routes = [
  { path: 'introduction', component: IntroductionComponent },
  { path: 'attention', component: AttentionComponent },
  { path: 'hot-n-cold', component: HotNColdObsComponent },
  {
    path: 'creator-functions', component: CreatorFunctionsComponent,
    children: creatorFuncRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
