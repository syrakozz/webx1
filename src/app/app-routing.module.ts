import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";



const routes : Routes = [
  {path:'test',component:HeaderComponent},
  {path:'homexxxx',component:HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
