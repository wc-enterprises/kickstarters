import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blogsection',
  templateUrl: './blog-section.component.html',
  styleUrls: [`./blog-section.component.css`],
})
export class blogsection {
  constructor(private router: Router) {}
  blogs = [
    {
      id:1,
      Image:
        '../../assets/blogimg1.svg',
      Title:
        'Navigating Student Accommodation in the UK: A Comprehensive Guide ',
      description: "Description for Blog Entry 1",
      Date: '12 July 2023',
      Author: 'Govind',
      content: [
        {
          subTitle: "Understanding the Landscape",
          para: "Start by discussing the importance of part-time jobs for international students. Mention statistics about Indian students working part-time in the UK. Highlight how part-time work can enhance your resume and provide valuable experience."
        },
        {
          subTitle: "Legal Requirements and Eligibility",
          para: "Explain the legal aspects of working in the UK as a student, including visa regulations. Mention the maximum number of hours you're allowed to work during term time and holidays. Provide links to official resources for detailed information."
        },
       
      ]
    },
    { 
      id:2,
      Image:
        '../../assets/blogimg2.svg',
      Title: "Securing Part-Time Jobs in the UK: A Student's Essential Guide",
      description:'',
      Date: '22 August 2023',
      Author: 'Govind',
      content: [
        {
          subTitle: "Understanding the Landscape",
          para: "Start by discussing the importance of part-time jobs for international students. Mention statistics about Indian students working part-time in the UK. Highlight how part-time work can enhance your resume and provide valuable experience."
        },
        {
          subTitle: "Legal Requirements and Eligibility",
          para: "Explain the legal aspects of working in the UK as a student, including visa regulations. Mention the maximum number of hours you're allowed to work during term time and holidays. Provide links to official resources for detailed information."
        },
       
      ]
    },
    { 
      id:3,
      Image:
        '../../assets/blogimg3.svg',
      Title: "Securing Part-Time Jobs in the UK: A Student's Essential Guide",
      description:'',
      Date: '22 August 2023',
      Author: 'Govind',
      content: [
        {
          subTitle: "Understanding the Landscape",
          para: "Start by discussing the importance of part-time jobs for international students. Mention statistics about Indian students working part-time in the UK. Highlight how part-time work can enhance your resume and provide valuable experience."
        },
        {
          subTitle: "Legal Requirements and Eligibility",
          para: "Explain the legal aspects of working in the UK as a student, including visa regulations. Mention the maximum number of hours you're allowed to work during term time and holidays. Provide links to official resources for detailed information."
        },
       
      ]
    },
    {
      id:4,
      Image:
        '../../assets/blogimg2.svg',
      Title: "Securing Part-Time Jobs in the UK: A Student's Essential Guide",
   
      description:'',
      Date: '22 August 2023',
      Author: 'Govind',
      content: [
        {
          subTitle: "Understanding the Landscape",
          para: "Start by discussing the importance of part-time jobs for international students. Mention statistics about Indian students working part-time in the UK. Highlight how part-time work can enhance your resume and provide valuable experience."
        },
        {
          subTitle: "Legal Requirements and Eligibility",
          para: "Explain the legal aspects of working in the UK as a student, including visa regulations. Mention the maximum number of hours you're allowed to work during term time and holidays. Provide links to official resources for detailed information."
        },
       
      ]
    },
    {
      id:5,
      Image:
        '../../assets/blogimg1.svg',
      Title: "Securing Part-Time Jobs in the UK: A Student's Essential Guide",
   
      description:'',
      Date: '22 August 2023',
      Author: 'Govind',
      content: [
        {
          subTitle: "Understanding the Landscape",
          para: "Start by discussing the importance of part-time jobs for international students. Mention statistics about Indian students working part-time in the UK. Highlight how part-time work can enhance your resume and provide valuable experience."
        },
        {
          subTitle: "Legal Requirements and Eligibility",
          para: "Explain the legal aspects of working in the UK as a student, including visa regulations. Mention the maximum number of hours you're allowed to work during term time and holidays. Provide links to official resources for detailed information."
        },
       
      ]
    },
  ];
  getBlogById(productId:string){
    return{
      id:1,
      Image:
        '../../assets/blogimg1.svg',
      Title:
        'Navigating Student Accommodation in the UK: A Comprehensive Guide ',
      description: "Description for Blog Entry 1",
      Date: '12 July 2023',
      Author: 'Govind',
      content: [
        {
          subTitle: "Understanding the Landscape",
          para: "Start by discussing the importance of part-time jobs for international students. Mention statistics about Indian students working part-time in the UK. Highlight how part-time work can enhance your resume and provide valuable experience."
        },
        {
          subTitle: "Legal Requirements and Eligibility",
          para: "Explain the legal aspects of working in the UK as a student, including visa regulations. Mention the maximum number of hours you're allowed to work during term time and holidays. Provide links to official resources for detailed information."
        },
       
      ]
    }
      
    
  }
  navigateToBlogDetail(blogId:string) {
    this.router.navigate(['/blog',blogId]);
  }

  
}
