import { Component } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls.service';
@Component({
  selector: 'app-addresspage',
  templateUrl: './addresspage.component.html',
  styleUrls: ['./addresspage.component.scss']
})
export class AddresspageComponent {
  addressData: any;

  constructor(private apicallservice: ApiCallsService) { }

  ngOnInit() {
    this.fetchaddressData();
  }

  fetchaddressData() {
    this.apicallservice.getProfileData().subscribe((data: any) => {
      this.addressData = data;
    });
  }
  showForm: boolean = false;
  showEmptyCard: boolean = true; // Initially, the empty card is shown
 // Define your profileData structure as needed
  submittedData: any = null; // Variable to hold the submitted data
  showEditForm: boolean = false;
    editData: any = {};
    isEditing: boolean = false;
  openForm() {
    this.showForm = !this.showForm; // Toggle the form's visibility
    this.showEmptyCard = !this.showEmptyCard; 
   // Toggle the empty card's visibility
  }

  submitForm() {
    // Handle form submission and update the empty card with the submitted data
    // For example, you can add the profileData to an array of addresses.
    // You may also want to reset the form or clear the profileData object.
    this.submittedData = { ...this.addressData }; // Copy the submitted data
    this.showForm = false; // Hide the form
    this.showEmptyCard = true;
  
 // Show the empty card again after submission
  }
  openEditForm() {
    this.showEditForm = true;
    this.isEditing = true;
    this.showEmptyCard=true;
}

cancelEdit() {
    this.showEditForm = false;
}

saveEdit() {
    // Handle the save operation, e.g., update the data in your backend
    // After saving, you can set showEditForm to false to close the edit form
    this.showEditForm = false;
    this.isEditing = false;
}


}
