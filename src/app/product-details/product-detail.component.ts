import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { IProduct } from '../utils/interface';
@Component({
  selector: 'app-productdetail',
  templateUrl: `product-detail.component.html`,
  styleUrls: [`product-detail.component.css`],
  
  
})
export class ProductDetailComponent implements OnInit{
  @ViewChildren('cardColumn') cardColumn!: QueryList<ElementRef>;
  @ViewChildren('cardColumnKits') cardColumnKits!: QueryList<ElementRef>;
  
  product!: { id: string; categoryName: string; name: string; description: string; imagePath: string; unit: string; unitsInStock: number; pricingId: string; sellingPrice: string; discount: string; discountUnit: string; attributes: { key: string; value: string; asset: string; }[]; variants: never[]; };


 

  

constructor(  private route: ActivatedRoute, private apiCallsService: ApiCallsService,private cartService:CartService){}
    @Input() panelTitle: string = '';
  isExpanded1: boolean = false;
  isExpanded2: boolean = false;
  isExpanded3:boolean = false;
  studentKits:any[]=[];
  recommendationrec: any[]=[];
  productId:any;
  
  productData: any; 
 postalCode: string = '';
  deliveryDate: string = '';
  codAvailable: boolean = false;
  

  async ngOnInit() {
  
    this.route.paramMap.subscribe((params)=>{
    this.productId=params.get('id')
    const product= this.apiCallsService.getProductById(this.productId) 
    this.loadProductDetails();
  })



console.log(this.productId);

 

  

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
    const productId = 'yourProductId';
  
    this.apiCallsService.getRecommendation(productId).subscribe( 
      (data:any) =>{
        data.data.forEach((item:any,index:number)=>{
          if(item.products.length === 0)data.data.splice(index, 1);
        });
        this.recommendationrec=data.data;
        console.log('recommendation', this.recommendationrec);
      },
    
    );

   
    
  }

  
  
  
     
 
  
  // product(product: any) {
  //   throw new Error('Method not implemented.');
  // }
  loadProductDetails() {
    this.product = this.apiCallsService.getProductById(this.productId);
    console.log(this.product); // Now you can access the product data
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

  togglePanel() {
    this.isExpanded1 = !this.isExpanded1;
  }
  toggledeliveryPanel() {
    this.isExpanded2 = !this.isExpanded2;
  }
  togglereturnPanel() {
    this.isExpanded3 = !this.isExpanded3;
  }
  checkDelivery() {
    // Implement the logic to check delivery availability and estimate delivery date
    // You can make an API call here to fetch the information based on the postalCode.
    // Update this.codAvailable and this.deliveryDate accordingly.
  }

  
  incrementQuantity(product: IProduct) {
    this.cartService.incrementQuantityBy1(product.id);
    console.log(this.incrementQuantity);
  }

  decrementQuantity(product: IProduct) {
    this.cartService.decrementQuantityOrDeleteProductFromCart(product.id);
    console.log(this.decrementQuantity);
  }
  
}

function getProductById(productId: string): any {
  throw new Error('Function not implemented.');
}
