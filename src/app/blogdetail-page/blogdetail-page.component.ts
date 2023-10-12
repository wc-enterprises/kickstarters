import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { blogsection } from "../common-components/blog-section/blog-section.component";
@Component({
    selector: 'app-blogdetail',
  templateUrl: `./blogdetail-page.component.html`,
  styleUrls: [`./blogdetail-page.component.css`],
})
export class BlogDetailComponent{
  id: number | undefined;

  constructor(private route: ActivatedRoute, private blogSection:blogsection) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
  }
}