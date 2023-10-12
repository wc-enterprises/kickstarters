import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { blogsection } from "../common-components/blog-section/blog-section.component";
@Component({
    selector: 'app-blogdetail',
  templateUrl: `./blogdetail-page.component.html`,
  styleUrls: [`./blogdetail-page.component.css`],
})
export class BlogDetailComponent{
  id: string| undefined;
  blogId: any;
  blog: { id: number; Image: string; Title: string; description: string; Date: string; Author: string; content: { subTitle: string; para: string; }[]; } | undefined;

  constructor(private route: ActivatedRoute, private blogSection:blogsection) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      this.blogId=params.get('id')
      const blog= this.blogSection.getBlogById(this.blogId) 
      this.loadBlogDetails();
  
    });
  }
  
  loadBlogDetails() {
    this.blog = this.blogSection.getBlogById(this.blogId);
    console.log(this.blog); // Now you can access the product data
  }
}