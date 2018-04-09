import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'mu';
}
