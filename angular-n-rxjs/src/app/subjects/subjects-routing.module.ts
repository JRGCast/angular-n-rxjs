import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { TheSubjectComponent } from './the-subject/the-subject.component';

export const routes: Routes = [{ path: 'the-subject', component: TheSubjectComponent }, { path: 'behavior-subject', component: BehaviorSubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
