import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { UserComponent } from "./user/user.component";

// 라우트 구성
const routes: Routes = [
  { path: "", redirectTo: "/central", pathMatch: "full" },
  { path: "central", component: UserComponent },
  { path: "central-module", component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
