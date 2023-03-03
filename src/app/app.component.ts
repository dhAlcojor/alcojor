import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'alcojor-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    RouterLink,
    MatListModule,
    RouterLinkActive,
    MatLineModule,
    NgForOf,
  ],
})
export class AppComponent {
  readonly title = 'Alcojor';

  readonly links = [
    { route: '/home', title: 'Home' },
    { route: '/blog', title: 'Blog' },
  ];
}
