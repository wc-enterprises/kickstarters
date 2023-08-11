import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `<div class="cart">
  <div class="header">
 
 <div class="inner-head"> <img src="./assets/bag.svg">
  <div style="color: #444;
  padding-top:2px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
">4items</div>
  </div>
  <img style="padding:2px 3vw 0 0;"src="./assets/xcircle.svg">
  </div>
  <div style="height:60vh;"></div>
  <div class="footer">
  <div style="display:flex; flex-direction:row;justify-content:space-between;"> 
  <p style="padding-left:3vw;">Order Total</p>
  <span style="padding-top:2.5vh; padding-right:4vw;">£44</span>
  </div>
  <button>Proceed to Checkout</button>
  </div>
</div>
`,
styles:[`.cart {
   background-color: #FFFFFF;
  color: black;
  width:30vw;
  height:auto;
  border:1px solid black;
}
.header{
  display:flex;
  justify-content:space-between;
  padding:2vh 0 0 2vw;
  align-items:center;
}
.inner-head{
  display:flex;
  width:5vw;
  gap:1vw;
}
button{
  display: flex;
width:25vw;
padding: 16px 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 99px;
background: #000;
margin-left:2vw;
color: #FFF;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 21px; /* 140% */
}
.footer{
  padding-bottom:3vh;
}
`]
})
export class CartComponent {}
