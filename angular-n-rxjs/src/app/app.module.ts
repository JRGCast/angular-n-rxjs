import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AttentionComponent } from './attention/attention.component';
import { HttpClientModule } from '@angular/common/http';
import { HotNColdObsComponent } from './hot-ncold-obs/hot-ncold-obs.component';
import { CreatorFunctionsComponent } from './creator-functions/creator-functions.component'
import { PipeableOperatorsComponent } from './pipeable-operators/pipeable-operators.component';
import { CommonModule } from '@angular/common';
import { CreatorFunctionsModule } from './creator-functions/creator-functions.module';
import { PipeableOperatorsModule } from './pipeable-operators/pipeable-operators.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AttentionComponent,
    HotNColdObsComponent,
    CreatorFunctionsComponent,
    PipeableOperatorsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    // CreatorFunctionsModule,
    // PipeableOperatorsModule
  ],
  exports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
