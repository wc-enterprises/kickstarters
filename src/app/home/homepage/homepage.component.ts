import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `<html>
    <head></head>
    <body>
      <app-headerandfooter>
        <div class="background">
          <div class="title">
            <p id="sub-title">
              Kickstart Your<br />UK Journey<br />with Kickstarters.
            </p>
            <p id="sub-title2">Your Ultimate Student Kit Destination</p>
          </div>
        </div>

        <div class="background-mobile">
          <div class="title-mobile">
            <p id="sub-title-mobile">The main page with<br />heading</p>
            <p id="sub-title2-mobile">
              Inspiring gym apparel for athletes and fitness <br />enthusiasts.
              Push your limits, surpass your <br />
              goals, move forward.
            </p>
          </div>
        </div>
        <app-productsection></app-productsection>
      </app-headerandfooter>
    </body>
  </html>`,

  styles: [
    `
      .background {
        background-image: url('./image.svg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        width: auto;
        height: 100vh;
        opacity: 1;
        display: block;
      }
      .background-mobile {
        display: none;
      }
      #sub-title {
        font-family: 'Inter';
        font-size: 72px;
        font-style: normal;
        font-weight: 600;
        line-height: 79.2px;
      }
      .title {
        display: flex;
        flex-direction: column;
        color: white;
        padding-left: 30px;
        padding-top: 200px;
        z-index: 1;
      }

      #sub-title2 {
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.6px;
        margin-top: -5vh;
      }
      // mobile css
      @media (max-width: 640px) {
        .background {
          display: none;
        }

        .background-mobile {
          background-image: url('./image-mobile.svg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          width: auto;
          height: 100vh;
          opacity: 1;
          display: block;
        }
        .title-mobile {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 30px;
          padding-top: 450px;
          z-index: 1;
        }
        #sub-title-mobile {
          color: #fff;
          font-family: 'Inter';
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 25px;
        }
        #sub-title2-mobile {
          color: #fff;
          font-family: 'Inter';
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 25.6px;
        }
      }
    `,
  ],
})
export class HomepageComponent {}
