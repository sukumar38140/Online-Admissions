import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MyloginComponent } from '../mylogin/mylogin.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myregister',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './myregister.component.html',
  styleUrl: './myregister.component.css'
})
// export class MyregisterComponent {
  export class MyregisterComponent { 
    reactiveForm : FormGroup;
  
    constructor(private router: Router, private registerform: FormBuilder) {
      this.router = router; 
      this.reactiveForm = this.registerform.group({
        fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
        gender: ['',  Validators.required],
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
        mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        dateofbirth: ['', [Validators.required]],
        coursetype: ['', [Validators.required]],
        terms: [false, Validators.requiredTrue]
      });
    }

    get fullName() { return this.reactiveForm.get('fullName'); }
    get gender() { return this.reactiveForm.get('gender'); }
    get email() { return this.reactiveForm.get('email'); }
    get mobilenumber() { return this.reactiveForm.get('mobilenumber'); }
    get dateofbirth() { return this.reactiveForm.get('dateofbirth'); }
    get coursetype() { return this.reactiveForm.get('coursetype'); }
    get terms() { return this.reactiveForm.get('terms'); }
  
    onSubmit() {
      console.log(this.reactiveForm.value);
    }

    login() {
      this.router.navigate(['mylogin']);
    }
  
    register() {
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
