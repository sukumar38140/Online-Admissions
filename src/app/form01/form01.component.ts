import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PerformComponent } from '../perform/perform.component';
import { QualformComponent } from '../qualform/qualform.component';
import { PartformComponent } from "../partform/partform.component";
import { RouterModule, Routes, Router } from '@angular/router';
import { MyloginComponent } from '../mylogin/mylogin.component';
import { MyregisterComponent } from '../myregister/myregister.component';
import { NgModule } from '@angular/core';

// const routes: Routes = [
//   { path: '', component: MyloginComponent },
//   { path: 'mylogin', component: MyloginComponent },
//   { path: 'myregister', component: MyregisterComponent },
// ];

@Component({
  selector: 'app-form01',
  standalone: true,
  imports: [FormsModule, CommonModule, PerformComponent, QualformComponent, PartformComponent],
  templateUrl: './form01.component.html',
  styleUrl: './form01.component.css'
})

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })


export class Form01Component implements AfterViewInit, OnInit {
  @ViewChild('sub') subInput!: ElementRef;
  @ViewChild('msg') msgInput!: ElementRef;


  ngOnInit() {
    this.generateRandomDigits();
  }

  generateRandomDigits() {
    let randomDigits = '';
    for (let i = 0; i < 4; i++) {
      randomDigits += Math.floor(Math.random() * 10);
    }
    this.temporaryApplicationId += randomDigits;
  }

  isHandicapped: boolean | null = null;
  physicallyChallenged: string = '';
  visuallyChallenged: string = '';

  currentStep: number = 1;
  customCheck1: boolean = true;
  subject: string = '';
  message: string = '';

  constructor(private router: Router) {}

  onHandicappedChange() {
    if (this.isHandicapped === false) {
      this.physicallyChallenged = '';
      this.visuallyChallenged = '';
    }
  }

  ngAfterViewInit() {}

  nextStep(step: number) {
    if (this.currentStep === 1) {
      if (!this.customCheck1) {
        alert('Please agree to the terms and conditions to proceed');
        return;
      }
      this.currentStep = step;
    } 
    else if (this.currentStep === 2) {
      // Validate personal details from perform component
      const performElement = document.querySelector('app-perform');
      if (performElement && typeof performElement['validateForm'] === 'function') {
        if (!performElement['validateForm']()) {
          alert('Please fill all required personal details correctly');
          return;
        }
      }
      this.currentStep = step;
    }
    else if (this.currentStep === 3) {
      // Validate qualification details from qualform component
      const qualformElement = document.querySelector('app-qualform');
      if (qualformElement && typeof qualformElement['validateForm'] === 'function') {
        if (!qualformElement['validateForm']()) {
          alert('Please fill all required qualification details correctly');
          return;
        }
      }
      this.currentStep = step;
    }
    else if (this.currentStep === 4) {
      // Validate parent details from partform component
      const partformElement = document.querySelector('app-partform');
      if (partformElement && typeof partformElement['validateForm'] === 'function') {
        if (!partformElement['validateForm']()) {
          alert('Please fill all required parent details correctly');
          return;
        }
      }
      this.currentStep = step;
    }
    else if (this.currentStep === 5 || this.currentStep === 6) {
      this.currentStep = step;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Validation methods are now handled in child components
  private validateEmptyField(value: any, fieldName: string): boolean {
    if (!value || value.trim() === '') {
      alert(`${fieldName} is required`);
      return false;
    }
    return true;
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
    return true;
  }

  private validateMobile(mobile: string): boolean {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return false;
    }
    return true;
  }
  closeApplication() {
    // Add logic to close the application (e.g., clear form, navigate)
    this.currentStep = 1; // Example: go back to step 1
    this.temporaryApplicationId = ''; 
    console.log('Application closed.');
    this.router.navigate(['/mylogin']);
  }  
  temporaryApplicationId: string = 'MITS-6925';  
}