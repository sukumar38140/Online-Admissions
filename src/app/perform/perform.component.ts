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
  pob: string = '';
  quota: string = '';
  academicYear: string = '';
  // Form fields
  branch: string = '';
  nationality: string = '';
  religion: string = '';
  minority: string = '';
  caste: string = '';
  motherTongue: string = '';
  citizenship: string = '';
  familySize: string = '';
  bloodGroup: string = '';
  panCardNo: string = '';
  aadharNo: string = '';
  passportNo: string = '';
  accommodation: boolean | undefined;
  transport: boolean | undefined;
  handicapped: boolean | undefined;
  submitted: boolean = false;


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
  subject = '';
  message = '';

  formErrors: { [key: string]: string } = {};
  

  ngAfterViewInit() {
  }

  convertToUppercase(event: any) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.toUpperCase();
  }

  isPANValid(): boolean {
    if (!this.panCardNo) return true;
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    return panRegex.test(this.panCardNo);
  }

  isAadharValid(): boolean {
    if (!this.aadharNo) return false;
    return /^[0-9]{12}$/.test(this.aadharNo);
  }

  validateForm(): boolean {
    this.submitted = true;

    // Required fields validation
    if (!this.branch || !this.nationality || !this.religion || 
        !this.minority || !this.caste || !this.motherTongue || 
        !this.bloodGroup || !this.isAadharValid() ||
        this.accommodation === undefined || 
        this.transport === undefined || 
        this.handicapped === undefined ||
        !this.communicationAddress || !this.communicationCity ||
        !this.communicationState || !this.communicationCountry ||
        !this.communicationZip || !this.presentAddress ||
        !this.presentCity || !this.presentState ||
        !this.presentcountry || !this.presentZip) {
      return false;
    }

    // Optional PAN validation
    if (this.panCardNo && !this.isPANValid()) {
      return false;
    }

    // Required field validations
    const requiredFields = {
      fullName: 'Full Name',
      email: 'Email ID',
      mobile: 'Mobile Number',
      dob: 'Date of Birth',
      pob: 'Place of Birth',
      quota: 'Quota',
      academicYear: 'Academic Year',
      communicationAddress: 'Communication Address',
      communicationCity: 'City',
      communicationState: 'State',
      communicationCountry: 'Country',
      communicationZip: 'Zip Code',
      permanentAddress: 'Permanent Address',
      permanentCity: 'Permanent City',
      permanentState: 'Permanent State',
      permanentCountry: 'Permanent Country',
      permanentZip: 'Permanent Zip Code'

    };

    // Check each required field
    Object.entries(requiredFields).forEach(([field, label]) => {
      const value = (this as any)[field];
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        this.formErrors[field] = `${label} is required`;
      }
    });

    // Email validation
    if (this.email && !this.email.trim()) {
      this.formErrors['email'] = 'Email is required';
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (this.email && !emailRegex.test(this.email)) {
        this.formErrors['email'] = 'Please enter a valid email address';
      }
    }

    // Mobile validation  
    if (!this.mobile || !this.mobile.trim()) {
      this.formErrors['mobile'] = 'Mobile number is required';
    } else {
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(this.mobile)) {
        this.formErrors['mobile'] = 'Please enter a valid 10-digit mobile number';
      }
    }

    return Object.keys(this.formErrors).length === 0;
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


  onHandicappedChange() {
    if (this.isHandicapped === false) {
      // Reset dropdown values if "No" is selected
      this.physicallyChallenged = '';
      this.visuallyChallenged = '';
    }
  }
}