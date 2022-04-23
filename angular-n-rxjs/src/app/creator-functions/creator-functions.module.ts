import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorFunctionsRoutingModule } from './creator-functions-routing.module';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';


@NgModule({
  declarations: [
    FromComponent,
    OfComponent
  ],
  imports: [
    CommonModule,
    CreatorFunctionsRoutingModule
  ]
})
export class CreatorFunctionsModule { }
