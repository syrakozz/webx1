import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formx',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <input> <br/>
      <input> <br/>

      <input type="button" value="login now">
    </div>
  `,
  styleUrls: ['./formx.component.css']
})
export class FormxComponent {

}
