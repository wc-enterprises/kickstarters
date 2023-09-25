import{Component} from '@angular/core';

@Component({
    selector:'app-blogpage',
    templateUrl:'./blog-page.component.html',
    styleUrls:[`./blog-page.component.css`],
})
export class BlogPage{
   blogs = [
        {
            Image: 'blog1.jpg',
            Date: 'September 25, 2023',
            Author: 'John Doe',
            Title: 'Blog 1 Title',
            Description: 'Description for Blog 1...',
        },
        // Add more blog objects as needed
    ];
}