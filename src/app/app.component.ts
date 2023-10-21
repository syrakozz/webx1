import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <router-outlet></router-outlet>

      <app-heroes/>
    </div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web1x 123xxxxxx';
  user= "adel";
}
