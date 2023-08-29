import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from './utils/interface';
import { getCategorizedProduct } from'../api-calls/api-calls.service'
@Component({
  selector: 'app-productsection',
  template: `<html>
  <body>
  
  
  
  
  <div class="list">
 
  <div  *ngFor="let category of categorizedProducts" class="card-title ">
  <div style=" width:auto;height: 10vh; display: flex; justify-content: space-between;">
      <p id="sub-title3">{{category.categoryName}}</p>
      <div id="arrow-button"  >
          <img id="left-arrow" (click)="scrollCards(category, 'left')"  src="./assets/arrowleft.svg">
          <img id="right-arrow" (click)="scrollCards(category, 'right')"  src="./assets/arrowright.svg">
      </div>
  </div>
  <div   #card  class="total-cards">
  
      <div  class="card-slider">
      <div class="card-container">
          <div    class="card" *ngFor="let product of category.products.slice(category.currentIndex ); let i = index">
              <img  class="img" [src]="product.imagePath" />
             
              <div class="title">
                  <div class="title2">
                  
                      <span class="span1">{{product.name }}</span>
                      <span class="span2">{{ product.description }}</span>
                     <span  style="padding:3vh 2px 0 0;"> <app-button></app-button> </span>
                    
                  </div>
              </div>
          </div>
          </div>
      </div>
      <!-- <div *ngIf="showSuccessMessage" class="success-message">
  <div style="display:flex;gap:10px;">
  <img style="width:150px;height:200px;"[src]="selectedProduct?.imageUrl" class="product-image" alt="Product Image" /><br><br>
  {{ selectedProduct?.title1 }} <br><br>{{ selectedProduct?.title2 }}<br><br>
</div>
<h3 style="margin:auto;">Added to cart successfully</h3>

</div> -->
  </div>
  </div>
  </div>
  </body>
  </html>`,
  styles:[` .list{
    height: auto;
   width:100%;
    background-color: white;
    }
    button{


border: none;
width:100%;
color: #FFF;
font-family: 'Inter';
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 21px;
display: flex;
cursor:pointer;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
align-self: stretch;
border-radius: 12px;
background: #000;
 }

    .card-title{
      padding-left: 30px;
      margin-top:50px;
   
  }
  .card-container{
    display:flex;
gap:50px;
width:100%;

transition: transform 0.3s ease-in-out; /* Add smooth transition */
transform: translateX(0);
  }

  #arrow-button{
    width:10%;
    margin-top:28px;
  }
  #right-arrow{
padding-left:10px;
  }
  .card{

 padding-left:5px;
  }
  .card-slider{
    overflow-x:scroll;
  
  }
  .img{
  
    width:316px;
 
height:260px;
border-radius: 12px;
  }
   #sub-title3{
    color: #000;
    font-family: 'Inter';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 33.6px; /* 140% */
    letter-spacing: -0.5px;
    width:90%
  }
  .total-cards{
    display: flex;
    flex-direction: row;
   
   }
   ::-webkit-scrollbar{
    overflow: hidden;
      }
.card-slider{
 display:flex;


}
.title{
  display: flex;
  flex-direction: column;
  color:white;
  padding-left:50px;
  padding-top:70px ;
   z-index: 1;
   
}
.title2{
  color:black;
 flex-direction: column;
 display: flex;

margin-left: -45px;
margin-top: -65px;
}
.span1{
  color: #000;
  font-family: 'Inter';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 140% */
}
.span2{
  color: #757575;
  font-family: 'Inter';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18.2px; /* 130% */
}
.success-message {
  background-color:white;
  justify-content:center;
  display:flex;
  flex-direction:column;
  color: black;
  padding: 10px;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.14);
  font-weight:700;
}

  //  mobile screen 
  @media (max-width: 640px) {
    .card-title{
      padding-left:5px;
    }
    .img{
      height:120px;
      width:148px;
    }
    #sub-title3{
      width:78%;
      font-size:16px;
    }
    #arrow-button{
      width:22%;
      margin-top:23px;
      display:flex;
      gap:5px;
    }
    #left-arrow{
   width:20px;
   height:20px;
    }
  
     #right-arrow{
        width:20px;
        height:20px;
        padding-left:0px;
      }
      .span1{
  font-size:12px;
  padding-left:5px;
      }
      .span2{
        font-size:12px;
        padding-left:5px;
      }
      .card-container{
gap:8px;
      }
      .card{

        padding-left:2px;
         }
         .title{padding-left:8px;
        padding-top:60px;}
    .title2{
      margin-left: -5px;
margin-top: -50px;
    }
  }`]
 

})
export class ProductSectionComponent {

  categorizedProducts: any[] = []; // Array to store the categorized product data

 

  ngOnInit() {
    this.categorizedProducts = getCategorizedProduct();
    console.log(this.categorizedProducts); // Check if the data is loaded
  }
    constructor(private router: Router) {
      this.categorizedProducts.forEach(Products => {
        Products.currentIndex = 0;
      });
    }
 
  //   cardSets: { heading: string; cards: Card[];currentIndex: number }[] = [
  //     { 
  //       heading: 'Bedroom essentials',
  //       currentIndex: 0,
  //       cards: [
  //     { imageUrl: './assets/washing2.svg',title:'', title1: 'Laundry Essentials', title2:'Starting from $223',},
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Bedroom Essentials', title2:'Starting from $99',},
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Kitchenware', title2:'Starting from $212',  },
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Electronics', title2:'Starting from $64', },
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Laundry Essentials', title2:'Starting from $223',},
  //     { imageUrl: './assets/washing2.svg', title:'', title1: 'Bedroom Essentials', title2:'Starting from $99', },
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Kitchenware', title2:'Starting from $212',  },
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Electronics', title2:'Starting from $64',  },
      
     
  //   ]},
  //   {
  //     heading: 'Kitchen essentials',
  //     currentIndex: 0,
  //   cards: [
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Laundry Essentials', title2:'Starting from $223',},
  //     { imageUrl: './assets/washing2.svg', title:'', title1: 'Bedroom Essentials', title2:'Starting from $99',},
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Kitchenware', title2:'Starting from $212',  },
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Electronics', title2:'Starting from $64', },
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Laundry Essentials', title2:'Starting from $223',},
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Bedroom Essentials', title2:'Starting from $99', },
  //     { imageUrl: './assets/washing2.svg', title:'', title1: 'Kitchenware', title2:'Starting from $212',  },
  //     { imageUrl: './assets/washing2.svg',title:'',  title1: 'Electronics', title2:'Starting from $64',  },
  //   ] },
  // ];
    @ViewChild('card') cardsElement!: ElementRef;
    cardWidth =1000; // Adjust the width of each card including margin
    currentIndex = 0;
  
    scrollCards(products: { currentIndex: number; categorizedProducts: string | any[]; }, direction: 'left' | 'right'): void {
      if (direction === 'left') {
        if (products.currentIndex > 0) {
          products.currentIndex--;
        }
      } else if (direction === 'right') {
        if (products.currentIndex < products.categorizedProducts.length - 1) {
          products.currentIndex++;
        }
      }

    }
    // showSuccessMessage: boolean = false;

    
    // selectedProduct: any; // Store the selected product information here
  
    // openCarts(product: any) {
    //   this.selectedProduct = product;
    //   this.showSuccessMessage = true;
    //   setTimeout(() => {
    //     this.showSuccessMessage = false;
    //     this.selectedProduct = null; // Reset selected product
    //   }, 2000);
    // }
  
    // updateVisibleCards(cardSet: any): void {
    //   cardSet.visibleCards = cardSet.cards.slice(cardSet.currentIndex, cardSet.currentIndex + 3);
    // }
  
    // moveLeft(cardSet: any): void {
    //   if (cardSet.currentIndex > 0) {
    //     cardSet.currentIndex--;
    //     this.updateVisibleCards(cardSet);
    //   }
    // }
  
    // moveRight(cardSet: any): void {
    //   if (cardSet.currentIndex < cardSet.cards.length - 3) {
    //     cardSet.currentIndex++;
    //     this.updateVisibleCards(cardSet);
    //   }
    // }
    
    isCartOpen = false; 

    openCart() {
      this.isCartOpen = !this.isCartOpen; 
   
    }
}


