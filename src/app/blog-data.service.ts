import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  private selectedImageId: string = '';

  setSelectedImageId(imageId: string) {
    this.selectedImageId = imageId;
  }

  getSelectedImageId() {
    return this.selectedImageId;
  }
}

interface Blog {
  id: number;
  title: string;
  content: string;
}
