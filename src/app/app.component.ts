import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-header  [guestname]=user></app-header>
      <app-formx></app-formx>
      <app-homex></app-homex>

      {{title}}
    </div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web1x 123xxxxxx';
  user= "adel";
}
