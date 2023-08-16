import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from './utils/interface';
@Component({
  selector: 'app-productsection',
  template: `<div  class="list">
  <div *ngFor="let cardSet of cardSets" class="card-title">
  <div style="height: 10vh; display: flex; justify-content: space-between;">
      <p id="sub-title3">{{cardSet.heading}}</p>
      <div style="margin-right: 5vw; margin-top: 3.5vh;">
          <img (click)="moveLeft(cardSet)"  src="./assets/arrowleft.svg">
          <img (click)="moveRight(cardSet)" style="padding-left: 1vw;" src="./assets/arrowright.svg">
      </div>
  </div>
  <div class="total-cards">
      <div  class="card-slider">
      <div #card class="card-container">
          <div  class="card" *ngFor="let card of cardSet.cards.slice(cardSet.currentIndex, cardSet.currentIndex +6 )">
              <img  class="img" [src]="card.imageUrl" />
             
              <div class="title">
                  <div class="title2">
                      <span class="span1">{{ card.title1 }}</span>
                      <span class="span2">{{ card.title2 }}</span>
                     <span  (click)="openCart()" style="padding:3vh 2px 0 0;"> <app-button ></app-button> </span>
                  </div>
              </div>
          </div>
          </div>
      </div>
  </div>
  </div>
  </div>`,
  styles:[` .list{
    height: auto;
   width:100%;
    background-color: white;
    }

    .card-title{
      padding-left: 2vw;
      margin-top: 8vh;
      
  }
  .card-container{
    display:flex;
gap:3.5vw;
width:100%;
  }
  .card{
    
 padding-left:0.5vw;
  }
  .img{
    height: auto;

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
  padding-left: 3vw;
  padding-top:10vh ;
   z-index: 1;
   
}
.title2{
  color:black;
 flex-direction: column;
 display: flex;

margin-left: -3vw;
margin-top: -9vh;
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
    `]
 

})
export class ProductSectionComponent {
   

    constructor(private router: Router) {
      this.cardSets.forEach(cardSet => {
        cardSet.currentIndex = 0;
      });
    }
 
    cardSets: { heading: string; cards: Card[];currentIndex: number }[] = [
      {
        heading: 'Bedroom essentials',
        currentIndex: 0,
        cards: [
      { imageUrl: './assets/washing2.svg',title:'', title1: 'Laundry Essentials', title2:'Starting from $223',},
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Bedroom Essentials', title2:'Starting from $99',},
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Kitchenware', title2:'Starting from $212',  },
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Electronics', title2:'Starting from $64', },
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Laundry Essentials', title2:'Starting from $223',},
      { imageUrl: './assets/washing2.svg', title:'', title1: 'Bedroom Essentials', title2:'Starting from $99', },
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Kitchenware', title2:'Starting from $212',  },
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Electronics', title2:'Starting from $64',  },
      
     
    ]},
    {
      heading: 'Kitchen essentials',
      currentIndex: 0,
    cards: [
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Laundry Essentials', title2:'Starting from $223',},
      { imageUrl: './assets/washing2.svg', title:'', title1: 'Bedroom Essentials', title2:'Starting from $99',},
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Kitchenware', title2:'Starting from $212',  },
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Electronics', title2:'Starting from $64', },
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Laundry Essentials', title2:'Starting from $223',},
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Bedroom Essentials', title2:'Starting from $99', },
      { imageUrl: './assets/washing2.svg', title:'', title1: 'Kitchenware', title2:'Starting from $212',  },
      { imageUrl: './assets/washing2.svg',title:'',  title1: 'Electronics', title2:'Starting from $64',  },
    ] },
  ];
    // @ViewChild('card') cardsElement!: ElementRef;
    // cardWidth =1000; // Adjust the width of each card including margin
    // currentIndex = 0;
  
    // scrollCards(direction: 'left' | 'right') {
    //   const cardsContainer = this.cardsElement.nativeElement;
    
    //   if (direction === 'left') {
    //     this.currentIndex = Math.max(this.currentIndex - 1, 0);
    //   } else {
    //     this.currentIndex = Math.min(this.currentIndex + 1, this.cardSets.length - 1);
    //   }
    
    //   const scrollAmount = -this.currentIndex * this.cardWidth;
      
    //   // Apply smooth transition
    //   cardsContainer.style.transition = 'transform 0.8s ease-in-out';
    //   cardsContainer.style.transform = `translateX(${scrollAmount}px)`;
    
    //   // Listen for the transition end event to remove the transition after it's done
    //   const transitionEndHandler = () => {
    //     cardsContainer.style.transition = '';
    //     cardsContainer.removeEventListener('transitionend', transitionEndHandler);
    //   };
    
    //   cardsContainer.addEventListener('transitionend', transitionEndHandler);
    // }
   
    updateVisibleCards(cardSet: any): void {
      cardSet.visibleCards = cardSet.cards.slice(cardSet.currentIndex, cardSet.currentIndex + 3);
    }
  
    moveLeft(cardSet: any): void {
      if (cardSet.currentIndex > 0) {
        cardSet.currentIndex--;
        this.updateVisibleCards(cardSet);
      }
    }
  
    moveRight(cardSet: any): void {
      if (cardSet.currentIndex < cardSet.cards.length - 3) {
        cardSet.currentIndex++;
        this.updateVisibleCards(cardSet);
      }
    }

    isCartOpen = false; 

    openCart() {
      this.isCartOpen = !this.isCartOpen; 
    }
}


