import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Hero} from "./hero";
import {FormsModule} from "@angular/forms";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {HEROES} from "./mock-heroes";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  template: `
    <div>

      <div *ngIf="selectedHero">
        <h2>xxxxx</h2>

      </div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes">
          <button [class.selected]="hero === selectedHero" type="button" (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span>
            <span class="name">{{hero.name}}</span>
          </button>
        </li>
      </ul>

      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name | uppercase}} Details</h2>
        <div>id: {{selectedHero.id}}</div>
        <div>
          <label for="hero-name">Hero name: </label>
          <input id="hero-name" [(ngModel)]="selectedHero.name" placeholder="name">
        </div>
      </div>


      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>

        {{applyForm.value.email}}
      </form>
    </div>
  `,
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {



  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  //route: ActivatedRoute = inject(ActivatedRoute);
 // housingService = inject(HousingService);
  housingLocation:   undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });


  submitApplication() {

    console.log("xxx",this.applyForm.value.email)

  }
}
