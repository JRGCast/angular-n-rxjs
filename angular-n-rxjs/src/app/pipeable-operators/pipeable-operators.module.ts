import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeableOperatorsRoutingModule } from './pipeable-operators-routing.module';
import { FilterComponent } from './filter/filter.component';
import { MapComponent } from './map/map.component';
import { TapComponent } from './tap/tap.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserModule } from '@angular/platform-browser';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';


@NgModule({
  declarations: [
    FilterComponent,
    MapComponent,
    TapComponent,
    DebounceTimeComponent,
    CatchErrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PipeableOperatorsRoutingModule
  ],
  exports: [
    CommonModule,
    BrowserModule
  ]
})
export class PipeableOperatorsModule { }
