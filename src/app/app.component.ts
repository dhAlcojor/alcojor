import { Component } from '@angular/core';

@Component({
  selector: 'alcojor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly title = 'Alcojor';

  readonly links = [
    { route: '/home', title: 'Home' },
    { route: '/blog', title: 'Blog' },
  ];
}
