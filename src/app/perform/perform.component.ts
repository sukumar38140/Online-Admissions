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
      this.presentAddress = this.communicationAddress;
      this.presentCity = this.communicationCity;
      this.presentState = this.communicationState;
      this.presentcountry = this.communicationCountry;
      this.presentZip = this.communicationZip;
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

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  isValidMobile(mobile: string): boolean {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  }

  validateForm(): boolean {
    this.submitted = true;

    if (!this.fullName?.trim() || 
        !this.email?.trim() || 
        !this.isValidEmail(this.email) ||
        !this.mobile?.trim() ||
        !this.isValidMobile(this.mobile) ||
        !this.dob ||
        !this.pob?.trim() ||
        !this.quota ||
        !this.academicYear?.trim()) {
      return false;
    }
    return true;
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