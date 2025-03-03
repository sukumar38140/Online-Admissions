import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = ''; 
  phonenumber = '';
  showOtpInput: boolean = false;

  verifyEmail() {
    // 1. Validate Email (You'll need a proper email validation)
    const isValidEmail = this.isValidEmailFormat(this.email); // Implement this function

    if (isValidEmail) {
      // 2. Simulate sending OTP (Replace with your actual logic)
      console.log("Sending OTP to:", this.email);
      this.showOtpInput = true; // Show OTP input

      // 3. (Optional) Disable the "Verify Email" button to prevent multiple clicks
      // document.getElementById('email').disabled = true; // Use ViewChild for better approach
    } else {
      alert("Please enter a valid email address."); // Or a better error message display
    }
  }

  verifyOTP() {
    const enteredOTP = document.getElementById('otp') as HTMLInputElement; // Get the entered OTP

    if (enteredOTP && enteredOTP.value === '123456') { // Replace '123456' with your actual OTP verification logic
      console.log("OTP verified!");
      // Proceed with registration
    } else {
      alert("Invalid OTP. Please try again."); // Or a better error message display
    }
  }

  isValidEmailFormat(email: string): boolean {
    // Basic email validation regex (improve this as needed)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isForm: boolean = false;

  showField(){
    this.isForm = true;
  }

  hideField(){
    this.isForm = false;
  }
}
