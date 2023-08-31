import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payments',
  template: `<html>
  <body>
  <app-headerandfooter>
   <div class="main-container">
  <div style="display:flex;">
  <p style=""></p>
   <p style="" class="heading">{{ heading }}</p>
   </div>
  <div class="sub-container">
 
<form class="form">

<p class="title">{{ title }}</p>
<div class="name">
 <div class="input-group">
 
 <input style="width:100%;" type="text" class="input">
 <label class="placeholder" for="firstname">First Name</label>
 </div>
 <div class="input-group">
 <input  style="width:100%;" type="text" class="input">
 <label class="placeholder" for="Lasttname">Last Name</label>
 </div>
 </div>
 <div class="input-group">
 <input  style="width:100%;" type="text" class="input">
 <label class="placeholder" for="Email">Email Address</label>

 </div>
 <div class="input-group">
 <input  style="width:100%;" type="text" class="input">
 <label class="placeholder" for="Street Address">Street Address</label>
 <input  style="width:100%;" id="streetaddress2" type="text" class="input">
 </div>

 <div class="name">
 <div class="input-group">
 
 <input style="width:100%;" type="text" class="input">
 <label class="placeholder" for="State">State/Province</label>
 </div>
 <div class="input-group">
 <input  style="width:100%;" type="text" class="input">
 <label class="placeholder" for="city">City</label>
 </div>
 </div>

 <div class="name">
 <div class="input-group">
 
 <input style="width:100%;" type="text" class="input">
 <label class="placeholder" for="zipcode">Zip/Postal Code</label>
 </div>
 <div class="input-group">
 <input  style="width:100%;" type="text" class="input">
 <label class="placeholder" for="Phone">Phone</label>
 </div>
 </div>
 <div class="input-group">
 <input   id="check"  type="checkbox">
 <label class="billing" for="billing">My billing and shipping address are the same</label>
 </div>  
</form>



<div class="billing-summary">
<p style="" class="title">{{ title1 }}</p>
  <div class="summary-row">
    <span>Subtotal</span>
    <span>{{ subtotal | currency }}</span>
  </div>
  <div class="summary-row">
    <span>Shipping</span>
    <span>{{ shipping | currency }}</span>
  </div>
  <div class="summary-row">
    <span>Tax</span>
    <span>{{ tax | currency }}</span>
  </div>
  <hr>
  <div class="summary-row total">
    <span>Grand Total</span>
    <span>{{ grandTotal | currency }}</span>
  </div>
  <button (click)="pay()">Pay Now  {{ grandTotal | currency }}</button>
</div>

  </div>
  </div>
  
  </app-headerandfooter>
  </body>
  </html>
 `,
  styles:[`
  .main-container{
    display: flex;
    flex-direction: column;
    
    height: auto; /* Adjust this as needed */
    
  
   
    
  }
  .heading{
    color: #000;
font-family: 'Open Sans';
font-size: 25px;
font-style: normal;
font-weight: 700;
height:10px;
margin-top:110px;
display:flex;
align-items:center;
padding-left:330px;



  }
  .title,.title1{
    color: #000;

/* Bold 16px */
font-family: 'Open Sans';
font-size: 16px;
font-style: normal;
font-weight: 800;
line-height: 20px; /* 125% */
height:10px;

  }
  
  .sub-container{
    display:flex;
    align-items:center;
    justify-content:center;
margin-top:20px;
    display: inline-flex;
align-items: flex-start;
gap: 55px;
    width:100%;
    height:auto;
  }
  .name{
    display:flex;
    gap:5px;
   
  }
  #streetaddress2{
    margin-top:20px;
  }
  .form{
    width:auto;
height:auto;
display:flex;
flex-direction:column;
    border-radius: 4px;
background: #FFF;
padding:8px 50px 25px 50px;

gap:30px;
/* Shadow 1 */
box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.14);

  }
  .input-group{
    position:relative;
    
  }
  .input{
    padding:10px;
    width:auto;
    
    box-sizing:border-box;
    outline:none;
    border-radius: 4px;
border: 1px solid var(--dark-dark-1, #B2BCCA);
color: var(--dark-dark-3, #4F4F4F);

/* Semibold 15px */
font-family: Open Sans;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 133.333% */
  }
  .placeholder{
    position:absolute;
    top:10px;
    left:8px;
    font-size:14px;
    padding:0px 5px;
    color:#666;
    transition:0.3s;
    pointer-events:none;
    color: var(--dark-dark-2, #828282);

/* Regular 12px */
font-family: Open Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 166.667% */
  }
  .input:focus + .placeholder,
  .input:not(:focus):not(:placeholder-shown) + .placeholder
  {
    top:-10px;
    color:#1660CF;
    background-color:#FFF;
  }
 
  .billing-summary{
    width: auto;
height: auto;
gap:20px;
display:flex;
flex-direction:column;
  padding:8px 50px 15px 50px;
border-radius: 4px;
background: #FFF;

color: var(--dark-dark-3, #4F4F4F);


/* Regular 14px */
font-family: Open Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
/* Shadow 1 */
box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.14);
  }
  .billing{
    color: var(--dark-dark-3, #4F4F4F);

/* Regular 14px */
font-family: 'Open Sans';
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
  }

  
  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding-top:10px;
    gap:80px;
  }
  
  .total {
    font-weight: bold;
  }
  
  hr {
    margin: 10px 0;
    border: none;
    border-top: 1px solid #ccc;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width:100%;
  }
//  mobile screen 
@media (max-width:640px){
  .sub-container{
    flex-direction:column;
    width:100%;
    height:auto;
  }
  .placeholder{
    font-size:12px;
  }
  .billing{
   width:auto;
  
   font-size:12px;
  }
.billing-summary{

margin-left:20px;
padding-left:30px;
}
.heading{
padding-left:25px;
font-size:16px
}
.title,title1{
  font-size:14px;
}
.summary-row{
  gap:80px;
}
 }
  `
 ]
})
export class PaymentsComponent {
  @Input() heading: string = 'Payments';
  @Input() title: string = 'Billing Address';
  @Input() title1: string = 'Billing Summary';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  state: string = '';
  zipcode: string = '';

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted');
  }

  subtotal: number = 100;
  shipping: number = 10;
  tax: number = 15;
  grandTotal: number = this.subtotal + this.shipping + this.tax;

  pay() {
    // Handle payment logic here
    console.log('Payment completed');
  }
  
}
