import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: `./payment.component.html`,
  styleUrls: [`./payment.component.css`],
})
export class PaymentsComponent {
  @Input() heading: string = 'Payments';
  @Input() title: string = 'Billing Address';
  @Input() title1: string = 'Billing Summary';
  @Input() title3: string = 'Shipping Address';
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
  billingForm: FormGroup;
  shippingForm: FormGroup;
  showShippingForm: boolean = false;
  billingAndShippingSame: boolean = false;
  constructor(private fb: FormBuilder) {
    this.billingForm = this.fb.group({
      firstname: [''],
      lastname: [''],
    });
    this.shippingForm = this.fb.group({
      firstname: [''],
      lastname: [''],
    });
    console.log(this.billingForm);
  }
  toggleShippingForm() {
    this.showShippingForm = !this.showShippingForm;
    if (this.showShippingForm) {
      this.shippingForm.setValue(this.billingForm.value);
    } else {
      this.shippingForm.reset();
    }
  }
}
