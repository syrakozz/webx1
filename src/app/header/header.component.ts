import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Options} from "../options";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 style="color: red">


    {{extra.age}}
    please login {{guestname}} </h1>
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
