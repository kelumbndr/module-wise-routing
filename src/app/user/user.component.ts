import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

interface User {
  id: number;
  name: string;
}

@Component({
  selector: "app-user",
  template: `
    <p>Central component with header</p>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      a:hover,
      a.active {
        color: red;
      }
    `
  ]
})
export class UserComponent implements OnInit {
  users: User[];

  ngOnInit() {
    this.users = [{ id: 1, name: "User-1" }, { id: 2, name: "User-2" }];
  }
}
