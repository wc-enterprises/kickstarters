import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-quick-view',
  templateUrl: `./quick-view-dialog.component.html`,
  styleUrls: [`./quick-view-dialog.component.css`],
})
export class QuickViewDialogComponent {
    @ViewChildren('cardColumn') cardColumn!: QueryList<ElementRef>;
    @ViewChildren('cardColumnKits') cardColumnKits!: QueryList<ElementRef>;
    
    product!: { id: string; categoryName: string; name: string; description: string; imagePath: string; unit: string; unitsInStock: number; pricingId: string; sellingPrice: string; discount: string; discountUnit: string; attributes: { key: string; value: string; asset: string; }[]; variants: never[]; };
  
  
   
  
    
  
  constructor(  private route: ActivatedRoute, private apiCallsService: ApiCallsService,private cartService:CartService,  public dialogRef: MatDialogRef<QuickViewDialogComponent>){}
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


  
}
loadProductDetails() {
    this.product = this.apiCallsService.getProductById(this.productId);
    console.log(this.product); // Now you can access the product data
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}