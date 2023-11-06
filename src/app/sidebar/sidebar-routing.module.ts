import { RouterModule, Routes } from "@angular/router";
import { SideBar } from "./sidebar.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: '',
      component: SideBar,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class SideBarRoutingModule {}