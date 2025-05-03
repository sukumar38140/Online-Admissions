import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './perform.component.html',
  styleUrl: './perform.component.css'
})

export class PerformComponent implements AfterViewInit {
  @ViewChild('sub') subInput!: ElementRef;
  @ViewChild('msg') msgInput!: ElementRef;

  fullName: string = '';
  email: string = '';
  mobile: string = '';
  dob: string = '';
  placeOfBirth: string = '';
  quota: string = '';
  academicYear: string = '';
  branch: string = '';
  nationality: string = '';
  religion: string = '';
  minority: string = '';
  caste: string = '';
  motherTongue: string = '';
  citizenship: string = '';
  familySize: string = '';
  bloodGroup: string = '';
  aadhar: string = '';
  department: string = ''; // Added
  transport: string = ''; // Added
  accommodation: string = ''; // Added


  isHandicapped: boolean | null = null; 
  physicallyChallenged: string = ''; 
  visuallyChallenged: string = ''; 

  communicationAddress: string = '';
  communicationCity: string = '';
  communicationState: string = '';
  communicationCountry: string = '';
  communicationZip: string = '';

  permanentAddress: string = '';
  permanentCity: string = '';
  permanentState: string = '';
  permanentCountry: string = '';
  permanentZip: string = '';

  presentAddress: string = '';
  presentCity: string = '';
  presentState: string = '';
  presentcountry: string = '';
  presentZip: string = '';

  sameAsPermanent: boolean = false;

  copyPermanentAddress() {
    if (this.sameAsPermanent) {
      this.presentAddress = this.permanentAddress;
      this.presentCity = this.permanentCity;
      this.presentState = this.permanentState;
      this.communicationCountry = this.permanentCountry;
      this.presentZip = this.permanentZip;
    } else {
      this.presentAddress = '';
      this.presentCity = '';
      this.presentState = '';
      this.presentcountry = '';
      this.presentZip = '';
    }
  }


  currentStep = 1;
  customCheck1 = true;
  subject: string = '';
  message: string = '';

  formErrors: { [key: string]: string } = {};
  submitted: boolean = false;

  ngAfterViewInit() {
  }

  convertToUppercase(event: any) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.toUpperCase();
  }

  validateForm(): boolean {
    this.submitted = true;
    let isValid = true;

    // Check required fields
    if (!this.fullName) isValid = false;
    if (!this.email) isValid = false;
    if (!this.mobile) isValid = false;
    if (!this.dob) isValid = false;
    if (!this.placeOfBirth) isValid = false;
    if (!this.quota) isValid = false;
    if (!this.academicYear) isValid = false;
    if (!this.branch) isValid = false;
    if (!this.nationality) isValid = false;
    if (!this.religion) isValid = false;
    if (!this.minority) isValid = false;
    if (!this.caste) isValid = false;
    if (!this.motherTongue) isValid = false;
    if (!this.citizenship) isValid = false;
    if (!this.familySize) isValid = false;
    if (!this.bloodGroup) isValid = false;
    if (!this.aadhar) isValid = false;
    if (!this.communicationAddress) isValid = false;
    if (!this.communicationCity) isValid = false;
    if (!this.communicationState) isValid = false;
    if (!this.communicationCountry) isValid = false;
    if (!this.department) isValid = false; // Added
    if (!this.transport) isValid = false; // Added
    if (!this.accommodation) isValid = false; // Added


    // Required field validations
    const requiredFields = {
      fullName: 'Full Name',
      email: 'Email ID',
      mobile: 'Mobile Number',
      dob: 'Date of Birth',
      placeOfBirth: 'Place of Birth',
      quota: 'Quota',
      academicYear: 'Academic Year',
      branch: 'Branch',
      nationality: 'Nationality',
      religion: 'Religion',
      minority: 'Minority',
      caste: 'Caste',
      motherTongue: 'Mother Tongue',
      citizenship: 'Citizenship',
      familySize: 'Family Size',
      bloodGroup: 'Blood Group',
      aadhar: 'Aadhar Card Number',
      communicationAddress: 'Communication Address',
      communicationCity: 'City',
      communicationState: 'State',
      communicationCountry: 'Country',
      communicationZip: 'Zip Code',
      department: 'Department', // Added
      transport: 'Transport', // Added
      accommodation: 'Accommodation' // Added
    };

    // Check each required field
    Object.entries(requiredFields).forEach(([field, label]) => {
      const value = (this as any)[field];
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        this.formErrors[field] = `${label} is required`;
        isValid = false;
      }
    });

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (this.email && !emailRegex.test(this.email)) {
      this.formErrors['email'] = 'Please enter a valid email address';
      isValid = false;
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (this.mobile && !mobileRegex.test(this.mobile.toString())) {
      this.formErrors['mobile'] = 'Please enter a valid 10-digit mobile number';
      isValid = false;
    }

    return isValid;
  }

  nextStep(step: number) {
    if (this.currentStep === 1 && this.customCheck1) {
      this.currentStep = step;
    } else if (this.currentStep === 2) {
      if (this.validateForm()) {
        this.currentStep = step;
      }
    } else if (this.currentStep === 3) {
      this.currentStep = step;
    }
  }

  prevStep(step: number) {
    this.currentStep = step;
  }

  // prevStep() {
  //   this.currentStep--;
  // }

  onHandicappedChange() {
    if (this.isHandicapped === false) {
      // Reset dropdown values if "No" is selected
      this.physicallyChallenged = '';
      this.visuallyChallenged = '';
    }
  }
}