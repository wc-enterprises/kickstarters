import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  template: `<html>
  <body>
  <app-headerandfooter>
  
  <div class="faq-accordion">
  <p class="accordion-heading">{{ heading }}</p>
  <hr>
  <div class="faq-item" *ngFor="let faq of faqs">
    <div class="question" (click)="toggleAnswer(faq)">
      {{ faq.question }}
      <span class="toggle-icon">{{ faq.open ? 'x' : '+' }}</span>
    </div>
    <div class="answer" [hidden]="!faq.open">{{ faq.answer }}</div>
  </div>
</div>
  </app-headerandfooter>
  </body>
  </html>`,
styles:[`.faq-accordion {
  font-family: Arial, sans-serif;
  width:50vw;
  display:flex;
  flex-direction:column;
  margin:auto;
  padding-top:15vh;

}
p {
  color: #000;
  font-family: 'Open Sans';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
.faq-item {
 
  border-bottom: 1px solid #cdd6da;
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
 

}
hr {
  border-bottom: 1px solid #cdd6da;
  margin: 10px 0;
 

}

.toggle-icon {
  
  right:25vw;
  font-size: 18px;
  cursor: pointer;
}

.question {

  font-family: 'Inter';
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 120%;
padding:0 0 15px 0;
display:flex;
justify-content:space-between;
}

.answer {
  border-top: 1px solid #cdd6da;
  color: #555;
  padding-top:3vh;
  padding-left:2vh;
  color: var(--text-txt-secondary, rgba(60, 60, 67, 0.85));
  /* Text/3 regular */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
// mobile screen

@media (max-width: 640px) {
  .accordion-heading{
    font-size:20px;
   
  }
  .question {
    font-size:14px;
  
  }
  .faq-item {
    width:auto;
    height:auto;
  }

}
`]
})
export class FAQComponent {
  @Input() heading: string = 'FAQs';
  faqs = [
      { question: 'Where can I watch?', answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.', open: false },
      { question: 'Tempus magna risus interdum ultricies sed urna?', answer: 'You can install Angular CLI using npm: npm install -g @angular/cli', open: false },
      { question: 'Augue in nibh urna volutpat mattis?', answer: 'You can install Angular CLI using npm: npm install -g @angular/cli', open: false },
      { question: 'Eu egestas sed sed posuere ultrices ?', answer: 'You can install Angular CLI using npm: npm install -g @angular/cli', open: false },
      { question: 'Elementum facilisi aliquam, nisi, orci vulputate?', answer: 'You can install Angular CLI using npm: npm install -g @angular/cli', open: false },
      { question: 'Nibh at odio dolor etiam neque in vel id orci?', answer: 'You can install Angular CLI using npm: npm install -g @angular/cli', open: false },
      { question: 'Non dolor at velit lorem erat maecenas?', answer: 'You can install Angular CLI using npm: npm install -g @angular/cli', open: false },
    ];
  
    toggleAnswer(faq: any) {
      faq.open = !faq.open;
    }
}
