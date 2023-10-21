import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {FormxComponent} from "./formx/formx.component";
import { AppRoutingModule } from './app-routing.module';
import {HeroesComponent} from "./heroes/heroes.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    HeaderComponent,
    FormxComponent,
    AppRoutingModule,
    FormsModule,
    HeroesComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
