import { Component } from '@angular/core';
@Component({
    selector:'app-blogsection',
    templateUrl:'./blog-section.component.html',
    styleUrls: [`./blog-section.component.css`],
})
export class blogsection{
    blogs = [
        {
          id: 1,
          imageUrl: '../../../assets/blog.jpg',
          date: 'September 15, 2023',
          time: '10:30 AM',
          name: 'Download and use 1000+ Blogging stock photos for free 1000+ Blogging stock photos for free',
          description: 'Search from 519528 Blogging stock photos, pictures and royalty-free images from iStock. Find high-quality stock photos that you won\'t find anywhere else.'
        },
        {
            id: 2,
            imageUrl: '../../../assets/blog.jpg',
            date: 'September 15, 2023',
            time: '10:30 AM',
            name: 'Download and use 1000+ Blogging stock photos for free 1000+ Blogging stock photos for free',
            description: 'Search from 519528 Blogging stock photos, pictures and royalty-free images from iStock. Find high-quality stock photos that you won\'t find anywhere else.'
          },
       
      ];
}