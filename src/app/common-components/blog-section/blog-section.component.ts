import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blogsection',
  templateUrl: './blog-section.component.html',
  styleUrls: [`./blog-section.component.css`],
})
export class blogsection{
  constructor(private router: Router) {}

  onImageClick(blogId: number) {
      // Navigate to the blogpage component with the selected blog's ID as a route parameter
      this.router.navigate(['/blogpage', blogId]);
  }
    blogs = [
        {
          
          Image : 'https://images.unsplash.com/photo-1596716587659-a922cc68513f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          Title: "Navigating Student Accommodation in the UK: A Comprehensive Guide",
          Description:"Finding the perfect student accommodation in the UK can be a daunting task, but with the right resources, it becomes a breeze. Dive into our latest blog post where we explore top accommodation websites like Gumtree, Rightmove, Zoopla, and SpareRoom. Learn how to effectively search and secure your ideal place. Plus, we've provided direct links to these platforms to make your search even more convenient Start your UK housing journey with confidence!",
          Date:"12 July 2023",
          Author : "Govindkumarasaamy"
        },
        {
          Image :'https://plus.unsplash.com/premium_photo-1673830186246-0d63496daecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
          Title:"Securing Part-Time Jobs in the UK: A Student's Essential Guide",
          Description:"Balancing studies with a part-time job is a rite of passage for many international students in the UK. Whether you're looking to gain work experience or manage expenses, our latest blog post offers insights into the UK's top job portals like Reed, Indeed, Totaljobs, and StudentJob. Discover tips on tailoring your job search, understanding work rights, and more. Plus, with direct links to these job platforms, kickstarting your part-time job hunt has never been easier. Dive in and empower your student journey in the UK!",
          Date : "22 September 2023",
          Author: "Govind"
          },
       
      ];
      
}
