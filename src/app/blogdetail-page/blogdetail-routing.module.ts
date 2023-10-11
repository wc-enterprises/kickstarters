import { RouterModule, Routes } from "@angular/router";
import { BlogDetailComponent } from "./blogdetail-page.component";
import { NgModule } from "@angular/core";
const routes: Routes = [
    {
      path: '',
      component: BlogDetailComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class BlogDetailRoutingModule {}