import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlatenningOperatorsRoutingModule } from './flatenning-operators-routing.module';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';


@NgModule({
  declarations: [
    SwitchMapComponent,
    MergeMapComponent
  ],
  imports: [
    CommonModule,
    FlatenningOperatorsRoutingModule
  ]
})
export class FlatenningOperatorsModule { }
