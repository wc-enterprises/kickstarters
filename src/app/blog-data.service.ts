import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  private blogs: Blog[] = [
    {
      id: 1,
      title: 'Sample Blog 1',
      content: 'This is the content of Sample Blog 1.',
    },
    {
      id: 2,
      title: 'Sample Blog 2',
      content: 'This is the content of Sample Blog 2.',
    },
    // Add more blog entries as needed
  ];

  constructor() {}

  // Method to fetch all blogs
  getBlogs(): Blog[] {
    return this.blogs;
  }

  // Method to fetch a single blog by ID
  getBlogById(id: number): Blog | null {
    const blog = this.blogs.find((b) => b.id === id);
    return blog || null;
  }
}

interface Blog {
  id: number;
  title: string;
  content: string;
}
