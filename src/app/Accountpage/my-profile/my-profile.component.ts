

import { Component } from '@angular/core';



@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
  
})
export class MyProfileComponent {
  editMode: boolean = false;
  formValid: boolean = false;

  profileData: any = {
    username: 'arunkumar',
    email: 'aruncopz@gmail.com',
    contactNumber: '9874563210',
    gender: 'male',
    birthdate: '25-07-1999'
  };

  

  editProfile() {
    // Check if all fields are filled
    if (this.profileData.username && this.profileData.email && this.profileData.contactNumber && this.profileData.gender && this.profileData.birthdate) {
      this.formValid = true;
      this.editMode = !this.editMode;
    } else {
      this.formValid = false;
      alert('Please fill in all fields before editing.');
    }
  }
  
  cancelEdit() {
    this.editMode = false;
    // Optionally, you can clear the input fields here if needed.
  }

  saveProfile() {
    // Save the profile data to your backend or perform any required actions
    console.log('Profile saved:', this.profileData);
    
    // Toggle off edit mode
    this.editMode = false;
  }
}
