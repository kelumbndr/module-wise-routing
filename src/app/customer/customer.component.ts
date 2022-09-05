import { Component, OnInit } from "@angular/core";

interface Customer {
  id: number;
  name: string;
}

@Component({
  selector: "app-customer",
  template: `
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
export class CustomerComponent implements OnInit {
  customers: Customer[];

  ngOnInit() {
    this.customers = [
      { id: 1, name: "Customer-1" },
      { id: 2, name: "Customer-2" }
    ];
  }
}
