import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyloginComponent } from '../mylogin/mylogin.component';

@Component({
  selector: 'app-myregister',
  imports: [],
  templateUrl: './myregister.component.html',
  styleUrl: './myregister.component.css'
})
export class MyregisterComponent {
  constructor(private router: Router) { }
  login() {
    // add user verification logic
    this.router.navigate(['mylogin']);
  }
  register(){
    this.router.navigate(['myregister']);
  }
  // email: string = '';
  // otp: string = '';
  // showOtpInput: boolean = false;
  // emailVerified: boolean = false; // Add this variable

  // constructor(private http: HttpClient) {} // Inject HttpClient

  // verifyEmail() {
  //   if (!this.email) return; // prevent empty email verification

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  //   if (!emailRegex.test(this.email)) {
  //       alert("Please enter a valid email address.");
  //       return;
  //   }

  //   // Send email verification request to your backend
  //   this.http.post('/api/verify-email', { email: this.email }).subscribe(
  //     (response: any) => { // Adjust type as needed
  //       console.log("Email verification request sent:", response);
  //       this.showOtpInput = true;
  //     },
  //     (error) => {
  //       console.error("Email verification request failed:", error);
  //       alert("Email verification failed. Please try again later."); // Show an error message to the user
  //     }
  //   );
  // }

  // verifyOTP() {
  //   if (!this.otp) return; // prevent empty otp verification
  //   // Send OTP verification request to your backend
  //   this.http.post('/api/verify-otp', { email: this.email, otp: this.otp }).subscribe(
  //     (response: any) => { // Adjust type as needed
  //       console.log("OTP verification successful:", response);
  //       this.emailVerified = true; // Set emailVerified to true
  //       this.showOtpInput = false;
  //     },
  //     (error) => {
  //       console.error("OTP verification failed:", error);
  //       alert("OTP verification failed. Please try again later."); // Show an error message to the user
  //     }
  //   );
  // }
}
