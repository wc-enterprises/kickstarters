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
  editedProfileData: any = {};
  formValid: boolean = false;
 
  editMode: boolean = false;

  // Function to enter edit mode
  editCard() {
      // Copy the current data to the editedProfileData variable
      this.editedProfileData = { ...this.profileData };
      this.editMode = true;
  }

  // Function to save the edited data
  saveCard() {
      // Update the original profileData with the editedProfileData
      this.profileData = { ...this.editedProfileData };

      // Exit edit mode
      this.editMode = false;
  }
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
