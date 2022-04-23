import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttentionComponent } from './attention/attention.component';
import { CreatorFunctionsComponent } from './creator-functions/creator-functions.component';
import { HotNColdObsComponent } from './hot-ncold-obs/hot-ncold-obs.component';
import { IntroductionComponent } from './introduction/introduction.component';

export const routes: Routes = [
  { path: 'introduction', component: IntroductionComponent },
  { path: 'attention', component: AttentionComponent },
  { path: 'hot-n-cold', component: HotNColdObsComponent },
  { path: 'creator-functions', component: CreatorFunctionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
