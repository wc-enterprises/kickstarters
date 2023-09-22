import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

import { ApiCallsService } from '../../services/api-calls.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-productsection',
  templateUrl: './product-section.component.html',
  styleUrls: [`./product-section.component.css`],
})
export class ProductSectionComponent {
  @ViewChildren('cardColumn') cardColumn!: QueryList<ElementRef>;
  @ViewChildren('cardColumnKits') cardColumnKits!: QueryList<ElementRef>;

  categorizedProducts: any[] = []; // Array to store the categorized product data
  studentKits:any[]=[];
  constructor(
    private router: Router,
    private apiCallsService: ApiCallsService,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    this.apiCallsService.getCategorizedProducts().subscribe(
      (data: any) => {
        data.data.forEach((item: any, index: number) => {
          if (item.products.length === 0) data.data.splice(index, 1);
        });

        this.categorizedProducts = data.data;

        console.log('Categorized products:', this.categorizedProducts);
      },
      (error) => {
        console.error('Error fetching categorized products:', error);
      }
    );


    this.apiCallsService.getStudentKits().subscribe( 
      (data:any) =>{
        data.data.forEach((item:any,index:number)=>{
          if(item.products.length === 0)data.data.splice(index, 1);
        });
        this.studentKits=data.data;
        console.log('student kits:', this.studentKits);
      },
      (error)=>{
        console.log('Error fetching student Kits:',error);
      }
    );
  }

  scrollLeft(catIndex: number, context: 'cardColumn' | 'cardColumnKits') {

if(context === 'cardColumn')
    this.cardColumn.forEach((item, index) => {
      if (index === catIndex) {
        item.nativeElement.scrollBy({
          left: -item.nativeElement.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    });

  else if(context === 'cardColumnKits')
  this.cardColumnKits.forEach((item, index) => {
    if (index === catIndex) {
      item.nativeElement.scrollBy({
        left: -item.nativeElement.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  });

  }

  scrollRight(catIndex: number, context: 'cardColumn' | 'cardColumnKits') {

    if(context === 'cardColumn')
    this.cardColumn.forEach((item, index) => {
      if (index === catIndex) {
        item.nativeElement.scrollBy({
          left: item.nativeElement.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    });

    else if 
    (context === 'cardColumnKits'
    )
    this.cardColumnKits.forEach((item, index) => {
      if (index === catIndex) {
        item.nativeElement.scrollBy({
          left: item.nativeElement.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    });
  }

  handleImageError(event: any) {
    event.target.src = 'assets/no-image-available.jpg';
    event.target.alt = 'Image not available';
  }

  isCartOpen = false;
  

  openCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  addProductToCart(product: any) {
    console.log('product', product);
  }
}
