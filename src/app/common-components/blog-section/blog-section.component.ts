import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { IBlogs } from 'src/app/utils/interface';
@Component({
  selector: 'app-blogsection',
  templateUrl: './blog-section.component.html',
  styleUrls: [`./blog-section.component.css`],
})
export class BlogSection {
  @Input()
  heading!: string;
  blogs: IBlogs[] = [];
  constructor(private router: Router,private apicallservice:ApiCallsService) {}

  ngOnInit() {
    this.apicallservice.getBlogs().subscribe((data: IBlogs[]) => {
      this.blogs = data;
    });
  }
 
  // getBlogById(blogId:any){
  //   return{
  //     id:1,
  //     image:
  //       '../../assets/blogimg1.svg',
  //     title:
  //       'Navigating Student Accommodation in the UK: A Comprehensive Guide ',
  //     description: "Description for Blog Entry 1",
  //     date: '12 July 2023',
  //     author: 'Govind',
  //     content: [
  //       {
  //         subTitle: "Understanding the Landscape",
  //         para: "Start by discussing the importance of part-time jobs for international students. Mention statistics about Indian students working part-time in the UK. Highlight how part-time work can enhance your resume and provide valuable experience."
  //       },
  //       {
  //         subTitle: "Legal Requirements and Eligibility",
  //         para: "Explain the legal aspects of working in the UK as a student, including visa regulations. Mention the maximum number of hours you're allowed to work during term time and holidays. Provide links to official resources for detailed information."
  //       },
       
  //     ]
  //   }
      
    
  // }
  // navigateToBlogDetail(blogId:number) {
  //   this.router.navigate(['/blog',blogId]);
  // }

  
}
