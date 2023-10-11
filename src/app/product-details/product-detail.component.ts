import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: `product-detail.component.html`,
  styleUrls: [`product-detail.component.css`],
  
  
})
export class ProductDetailComponent implements OnInit{
  @ViewChildren('cardColumn') cardColumn!: QueryList<ElementRef>;
  @ViewChildren('cardColumnKits') cardColumnKits!: QueryList<ElementRef>;
 

  

constructor(  private route: ActivatedRoute, private apiCallsService: ApiCallsService){}
    @Input() panelTitle: string = '';
  isExpanded: boolean = false;
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
    this.isExpanded = !this.isExpanded;
  }
  checkDelivery() {
    // Implement the logic to check delivery availability and estimate delivery date
    // You can make an API call here to fetch the information based on the postalCode.
    // Update this.codAvailable and this.deliveryDate accordingly.
  }
  
}

function getProductById(productId: string): any {
  throw new Error('Function not implemented.');
}
