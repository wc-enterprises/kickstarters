import { Component } from '@angular/core';
@Component({
  selector: 'app-blogsection',
  templateUrl: './blog-section.component.html',
  styleUrls: [`./blog-section.component.css`],
})
export class blogsection {
  blogs = [
    {
      Image:
        '../../assets/blogimg1.svg',
      Title:
        'Navigating Student Accommodation in the UK: A Comprehensive Guide ',
    
      Date: '12 July 2023',
      Author: 'Govind',
    },
    {
      Image:
        '../../assets/blogimg2.svg',
      Title: "Securing Part-Time Jobs in the UK: A Student's Essential Guide",
   
      Date: '22 August 2023',
      Author: 'Govind',
    },
    {
      Image:
        '../../assets/blogimg3.svg',
      Title: "Securing Part-Time Jobs in the UK: A Student's Essential Guide",
   
      Date: '22 August 2023',
      Author: 'Govind',
    },
    {
      Image:
        '../../assets/blogimg2.svg',
      Title: "Securing Part-Time Jobs in the UK: A Student's Essential Guide",
   
      Date: '22 August 2023',
      Author: 'Govind',
    },
    {
      Image:
        '../../assets/blogimg1.svg',
      Title: "Securing Part-Time Jobs in the UK: A Student's Essential Guide",
   
      Date: '22 August 2023',
      Author: 'Govind',
    },
  ];
}
