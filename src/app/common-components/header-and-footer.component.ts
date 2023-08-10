import { Component } from '@angular/core';

@Component({
  selector: 'app-headerandfooter',
  template: `<div class="main-box">
  <!-- header html -->
  <div class="header">

      <span class="logo-title">
          <img src="./assets/kicklogo.svg">
          <p id="p1">KICKSTARTERS</p>
      </span>
      <span class="right">
          <a id="FAQs">FAQs</a>
          <a id="contact">Contact Us</a>
          <a class="bag"><img style="" src="./assets/bag.svg"></a>
      </span>

  </div>
  <!-- content html -->

  <div style="width:100vw; height:90vh;">

  </div>


  <!-- footer html -->
  <div class='footer'>
      <div class="mid-foot">
          <div class="mid-left">
              <div style="display:flex;flex-direction: column;gap:3vh;">
                  <a style="font-weight: 600;font-size: 16px;">Shop</a>
                  <a>Items</a>
                  <a>Kits</a>
                  <a>Accessories</a>
              </div>
              <div style="display:flex;flex-direction: column;gap:3vh;">
                  <a style="font-weight: 600;font-size: 16px;">Help</a>
                  <a>About</a>
                  <a>FAQ</a>
                  <a>Returns policy</a>
              </div>
              <div style="display:flex;flex-direction: column;gap:3vh;">
                  <a style="font-weight: 600;font-size: 16px;">Follow</a>
                  <a>Twitter</a>
                  <a>Instagram</a>
                  <a>Facebook</a>
              </div>
          </div>
          <div class="mid-right">
              <p>Discover Everyday Essentials Delivered Right to Your<br> Doorstep</p>
          </div>
      </div>
      <div class="end-foot">
          <div>
              <p style="color: #000;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 25.2px; /* 180% */">© 2023 Unikits.<br>
              <p style="margin-top: -1vh;color: #000;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 25.2px;
              text-decoration-line: underline;">Privacy Policy, Terms of Service.</p>

          </div>
          <div class="payment">
              <img src="./assets/Visa.svg">
              <img src="./assets/Mastercard.svg">
              <img src="./assets/Discover.svg">
              <img src="./assets/Amex.svg">
              <img src="./assets/PayPal.svg">
              <img src="./assets/GooglePay.svg">
              <img src="./assets/ApplePay.svg">

          </div>
      </div>
  </div>
</div>`,
styles: [
    `
    .main-box{
        width: 100vw;
        height:auto ;
    }
    .header{
        width: 100vw;
        height: 10vh;
        background-color: #FFFFFF;
        display: flex;
        justify-content:space-between;
    align-items: flex-start;
    position:fixed;
    }
    .logo-title{
        display: flex;
        padding-left: 2vw;
        gap:8px
    }
    #p1{
        color: #000;
    font-family: Average Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 100% */
    letter-spacing: 7px;
    text-transform: uppercase;
    }
    .bag{
       
       margin-top: -1.5vh;
       border-radius: 99px;
       background: #F5F5F5;
       display: inline-flex;
    padding: 12px;
    justify-content: center;
    align-items: flex-start;
    
    }
    .right{
      display: flex;
      
      padding:30px 35px 0 0 ;
    }
    #FAQs{
        color: #000;
    font-family: 'Inter';
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 21px;
    padding-right: 4vh;
    }
    #contact{
        color: #000;
        font-family: 'Inter';
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px;
        padding-right: 2vh;
    }
    .footer{
    width:100vw;
    height:50vh;
    border-top: 1px solid #E3E3E3;
    
    }
    .mid-foot{
       
        
        display: flex;
       
      
    }
    .mid-left{
        width:70vw;
        display: flex;
        gap:5vw;
        color: #000;
        font-family: 'Inter';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
    padding-top: 10vh;
    padding-left: 2vw;
    }
    .mid-right{
        width:30vw;
        color: #000;
    font-family: 'Inter';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25.2px; 
    
    padding-top: 7vh;
    
    }
    .end-foot{
          padding-left: 2vw;
        display: flex;
        padding-top: 8vh;
      
    }
    .payment{
        width: 35px;
        height: 24px;
        margin-top: 7vh;
        gap:1vw;
        display: flex;
        margin-left: 60vw;
        width: fit-content;
    }
    `
  ]
})
export class HeaderAndFooterComponent {}



