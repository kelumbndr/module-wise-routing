import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerComponent } from "./customer.component";
import { CustomerDetailComponent } from "./customer-detail.component";
import { UserDetailComponent } from "../user/user-detail.component";

/* 기능 모듈 단위 라우팅 구성 */
const routes: Routes = [
  {
    path: "central-module",
    component: CustomerComponent,
    children: [
      {path: 'detail', component: UserDetailComponent}
    ]
  }
];



@NgModule({
  /* 기능 모듈 단위 라우터 등록  */
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
