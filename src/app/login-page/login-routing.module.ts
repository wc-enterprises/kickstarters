import { RouterModule, Routes } from "@angular/router";
import { Login } from "./login.component";
import { NgModule } from "@angular/core";
import { TestComponent } from "./test/test.component";
const routes: Routes = [
    {
      path: '',
      component: Login,
    },
    {
      path: 'test',
      component: TestComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class LoginRoutingModule {}