import { RouterModule, Routes } from "@angular/router";
import { RegisterForm } from "./register.component";
import { NgModule } from "@angular/core";
const routes: Routes = [
    {
      path: '',
      component: RegisterForm,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class RegisterFormRoutingModule {}