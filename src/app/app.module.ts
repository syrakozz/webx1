import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {FormxComponent} from "./formx/formx.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    HeaderComponent,
    FormxComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
