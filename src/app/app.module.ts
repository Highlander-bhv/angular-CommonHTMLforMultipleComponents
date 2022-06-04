import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';

import {Component1Component} from './components/component1/component1.component';
import {Component2Component} from './components/component2/component2.component';
import {Component3plusComponent} from "./components/component3plus/component3plus.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule



  ],
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3plusComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*

*/