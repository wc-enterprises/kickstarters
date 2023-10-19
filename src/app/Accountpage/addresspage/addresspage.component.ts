import { Component } from '@angular/core';

@Component({
  selector: 'app-addresspage',
  templateUrl: './addresspage.component.html',
  styleUrls: ['./addresspage.component.scss']
})
export class AddresspageComponent {
  showForm: boolean = false;
  showEmptyCard: boolean = true; // Initially, the empty card is shown
  profileData: any = {}; // Define your profileData structure as needed
  submittedData: any = null; // Variable to hold the submitted data

  openForm() {
    this.showForm = !this.showForm; // Toggle the form's visibility
    this.showEmptyCard = !this.showEmptyCard; // Toggle the empty card's visibility
  }

  submitForm() {
    // Handle form submission and update the empty card with the submitted data
    // For example, you can add the profileData to an array of addresses.
    // You may also want to reset the form or clear the profileData object.
    this.submittedData = { ...this.profileData }; // Copy the submitted data
    this.showForm = false; // Hide the form
    this.showEmptyCard = true; // Show the empty card again after submission
  }
}
