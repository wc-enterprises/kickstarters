import{Component} from '@angular/core';

@Component({
    selector:'app-blogpage',
    templateUrl:'./blog-page.component.html',
    styleUrls:[`./blog-page.component.css`],
})
export class BlogPage{
   blogs = [
        {
            Image:'https://images.unsplash.com/photo-1596716587659-a922cc68513f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            Date: 'September 25, 2023',
            Author: 'John Doe',
            Title: 'Blog 1 Title',
            Description: 'Description for Blog 1...',
        },
        // Add more blog objects as needed
    ];
}