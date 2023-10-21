import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Options} from "../options";

import {FormxComponent} from "../formx/formx.component";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormxComponent, HomeComponent],
  template: `<h1 style="color: red">

xxxxxxxx
    {{extra.age}}
    please login {{guestname}}

    <app-formx></app-formx>
    <app-homex></app-homex>

  </h1>

  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Input()
  guestname:string = ""


  extra:Options={
    size:"XL",
    age:22
  }
}
