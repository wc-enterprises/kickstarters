import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
  <app-headerandfooter></app-headerandfooter>
  <app-qa></app-qa>
  <app-button></app-button>
  <app-cart></app-cart>
  <app-payments></app-payments>
  <div class="background">
  <div class="title">
      <p id="sub-title">
          The main <br>page with<br>heading
      </p>
      <p id="sub-title2">Inspiring gym apparel for athletes and fitness enthusiasts.<br>
          Push your limits, surpass your goals, move forward.</p>
     
  </div>
</div>
<app-productsection></app-productsection>
`,

styles:[`.background {
    
  background-image: url('./image.svg');
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center center;
 width: 100vw;
 height: 100vh;
 opacity:1;

 overflow-x: hidden;
}
#sub-title{
 font-family: 'Inter';
 font-size: 72px;
 font-style: normal;
 font-weight: 600;
 line-height: 79.2px;
 
}
.title{
   display: flex;
   flex-direction: column;
   color:white;
   padding-left: 3vw;
   padding-top:10vh ;
    z-index: 1;
    
}

#sub-title2{
 font-size: 16px;
 font-style: normal;
 font-weight: 400;
 line-height: 25.6px; 
 margin-top:-5vh;

}`],
})
export class HomepageComponent {}
