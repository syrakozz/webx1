import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Options} from "../options";
import {OPTIONSLIST} from "../mock-OptionList";

@Component({
  selector: 'app-homex',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="x1">
     aaa 123


      <ul>
        <li *ngFor="let one of alloptions">
          <button (click)="selectOption(one)">
            this size of option is :  {{one.size}}  {{one.age}} <br/>
          </button>

        </li>

      </ul>

      <div *ngIf="selectedOptions" >the selected option is {{selectedOptions.size}}  {{selectedOptions.age}} </div>


    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  singleoption:Options = {
    size:"222",
    age:33
  }

  selectedOptions?: Options;

  selectOption(option:Options){
    this.selectedOptions = option

    console.log("the selected option is ",option.size)
  }
  alloptions = OPTIONSLIST


  submitApp(){
    console.log("xxxxxx")
  }
}
