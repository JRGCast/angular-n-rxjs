import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { TheBehaviorSubjectComponent } from './the-behavior-subject/the-behavior-subject.component';
import { TheSubjectComponent } from './the-subject/the-subject.component';


@NgModule({
  declarations: [
    TheBehaviorSubjectComponent,
    TheSubjectComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
