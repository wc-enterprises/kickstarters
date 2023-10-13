import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiCallsService } from "../services/api-calls.service";
import { IBlog } from "../utils/interface";

@Component({
    selector: 'app-blogdetail',
  templateUrl: `./blogdetail-page.component.html`,
  styleUrls: [`./blogdetail-page.component.css`],
})
export class BlogDetailComponent{
  blog: IBlog | undefined;
  blogId:any;
  router: any;
  

  constructor(private route: ActivatedRoute,private apicallservice:ApiCallsService ) { }

  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get('id');
    
    if (blogId) { // Check if blogId is not null
      this.apicallservice.getBlogById(blogId).subscribe((data: IBlog) => {
        this.blog = data;
      });
    }
  }
  navigateToBlogPage() {
    this.router.navigate(['/blog']); 
  }
  }
  
  // loadBlogDetails() {
  //   this.blog = this.blogsection.getBlogById(this.blogId);
  //   console.log(this.blog);
  // }
