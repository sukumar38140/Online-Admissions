import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PerformComponent } from '../perform/perform.component';
import { QualformComponent } from '../qualform/qualform.component';
import { PartformComponent } from "../partform/partform.component";
import { RouterModule, Routes } from '@angular/router';
import { MyloginComponent } from '../mylogin/mylogin.component';
import { MyregisterComponent } from '../myregister/myregister.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: MyloginComponent },
  { path: 'mylogin', component: MyloginComponent },
  { path: 'myregister', component: MyregisterComponent },
];

// @Component({
//   selector: 'app-form01',
//   standalone: true,
//   imports: [FormsModule, CommonModule, PerformComponent, QualformComponent, PartformComponent],
//   templateUrl: './form01.component.html',
//   styleUrl: './form01.component.css'
// })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


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

  constructor() {}

  onHandicappedChange() {
    if (this.isHandicapped === false) {
      this.physicallyChallenged = '';
      this.visuallyChallenged = '';
    }
  }

  ngAfterViewInit() {}

  nextStep(step: number) {
    if (this.currentStep === 1 && this.customCheck1) {
      this.currentStep = step;
    } else if (this.currentStep === 2 && this.validateStep2()) {
      this.currentStep = step;
    } else if (this.currentStep === 3 && this.validateStep3()) {
      this.currentStep = step;
    } else if (this.currentStep === 4 && this.validateStep4()) {
      this.currentStep = step;
    } else if (this.currentStep === 5 && this.validateStep5()) {
      this.currentStep = step;
    } else if (this.currentStep === 6 && this.validateStep5()) {
      this.currentStep = step;
    } else if (this.currentStep > 6) {
      this.currentStep = step;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  validateStep2(): boolean {
    if (!this.subject && this.subInput) {
      this.subInput.nativeElement.style.borderColor = 'red';
      return false;
    } else if (this.subInput) {
      this.subInput.nativeElement.style.borderColor = 'green';
    }
    return true;
  }

  validateStep3(): boolean {
    if (!this.message && this.msgInput) {
      this.msgInput.nativeElement.style.borderColor = 'red';
      return false;
    } else if (this.msgInput) {
      this.msgInput.nativeElement.style.borderColor = 'green';
    }
    return true;
  }
    validateStep4(): boolean {
    if (!this.message && this.msgInput) {
      this.msgInput.nativeElement.style.borderColor = 'red';
      return false;
    } else if (this.msgInput) {
      this.msgInput.nativeElement.style.borderColor = 'green';
    }
    return true;
  }
    validateStep5(): boolean {
    if (!this.message && this.msgInput) {
      this.msgInput.nativeElement.style.borderColor = 'red';
      return false;
    } else if (this.msgInput) {
      this.msgInput.nativeElement.style.borderColor = 'green';
    }
    return true;
  }
  validateStep6(): boolean {
    if (!this.message && this.msgInput) {
      this.msgInput.nativeElement.style.borderColor = 'red';
      return false;
    } else if (this.msgInput) {
      this.msgInput.nativeElement.style.borderColor = 'green';
    }
    return true;
  }
  closeApplication() {
    // Add logic to close the application (e.g., clear form, navigate)
    this.currentStep = 1; // Example: go back to step 1
    this.temporaryApplicationId = ''; 
    console.log('Application closed.');
  }  
  temporaryApplicationId: string = 'MITS-6925';  
}
