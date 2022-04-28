import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeableOperatorsRoutingModule } from './pipeable-operators-routing.module';
import { FilterComponent } from './filter/filter.component';
import { MapComponent } from './map/map.component';
import { TapComponent } from './tap/tap.component';


@NgModule({
  declarations: [
    FilterComponent,
    MapComponent,
    TapComponent
  ],
  imports: [
    CommonModule,
    PipeableOperatorsRoutingModule
  ]
})
export class PipeableOperatorsModule { }
