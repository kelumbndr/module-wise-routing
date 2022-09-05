import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    a:hover, a.active { color: red; }
  `]
})
export class AppComponent {}