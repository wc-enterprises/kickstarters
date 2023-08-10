import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button>Add to cart</button>`,
  styles:[`button{
//     
//     height: 5vh;
//     border-radius: 100px;
//    
//  background-color:black;
//  color:white;
//  font-family: 'Inter';
//  font-size: 13px;
//  font-style: normal;
//  font-weight: 600;
//  line-height: 16px;
//  margin-top: 2.5vh;
border: none;
width:316px;
color: #FFF;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 21px;
display: flex;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
align-self: stretch;
border-radius: 99px;
background: #000;
 }`]
})
export class ButtonComponent {}
