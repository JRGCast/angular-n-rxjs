import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttentionComponent } from './attention/attention.component';
import { CreatorFunctionsComponent } from './creator-functions/creator-functions.component';
import { HotNColdObsComponent } from './hot-ncold-obs/hot-ncold-obs.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { routes as creatorFuncRoutes } from './creator-functions/creator-functions-routing.module';
import { routes as pipeableOperatorsRoutes } from './pipeable-operators/pipeable-operators-routing.module'
import { routes as flatteningOperatorsRoutes } from './flatenning-operators/flatenning-operators-routing.module'
import { routes as subjectRoutes } from './subjects/subjects-routing.module'
import { PipeableOperatorsComponent } from './pipeable-operators/pipeable-operators.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FlatenningOperatorsComponent } from './flatenning-operators/flatenning-operators.component';
import { SubjectsComponent } from './subjects/subjects.component';

export const routes: Routes = [
  { path: 'introduction', component: IntroductionComponent },
  { path: 'attention', component: AttentionComponent },
  { path: 'hot-n-cold', component: HotNColdObsComponent },
  {
    path: 'creator-functions', component: CreatorFunctionsComponent,
    children: creatorFuncRoutes
  },
  {
    path: 'pipeable-operators', component: PipeableOperatorsComponent,
    children: pipeableOperatorsRoutes
  },
  {
    path: 'flattening-operators', component: FlatenningOperatorsComponent,
    children: flatteningOperatorsRoutes
  },
  {
    path: 'subjects', component: SubjectsComponent,
    children: subjectRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, CommonModule],
  exports: [RouterModule, CommonModule, BrowserModule]
})
export class AppRoutingModule { }
