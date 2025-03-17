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

  isHandicapped: boolean | null = null; 
  physicallyChallenged: string = ''; 
  visuallyChallenged: string = ''; 

  constructor() {}

  // Function to handle changes in the "Handicapped" radio buttons
  onHandicappedChange() {
    if (this.isHandicapped === false) {
      // Reset dropdown values if "No" is selected
      this.physicallyChallenged = '';
      this.visuallyChallenged = '';
    }
  }
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

  ngAfterViewInit() {
  }

  convertToUppercase(event: any) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.toUpperCase();
  }

  nextStep(step: number) {
    if (this.currentStep === 1 && this.customCheck1) {
      this.currentStep = step;
    } else if (this.currentStep === 2) {
      if (this.validate(0)) {
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

  validate(val: number): boolean {
    let flag = true;

    if (val >= 1 || val === 0) {
      if (!this.subject) {
        if (this.subInput) {
          this.subInput.nativeElement.style.borderColor = 'red';
        }
        flag = false;
      } else {
        if (this.subInput) {
          this.subInput.nativeElement.style.borderColor = 'green';
        }
        flag = true;
      }
    }

    if (val >= 2 || val === 0) {
      if (!this.message) {
        if (this.msgInput) {
          this.msgInput.nativeElement.style.borderColor = 'red';
        }
        flag = false;
      } else {
        if (this.msgInput) {
          this.msgInput.nativeElement.style.borderColor = 'green';
        }
        flag = true;
      }
    }
    if (val >= 3 || val === 0) {
      if (!this.message) {
        if (this.msgInput) {
          this.msgInput.nativeElement.style.borderColor = 'red';
        }
        flag = false;
      } else {
        if (this.msgInput) {
          this.msgInput.nativeElement.style.borderColor = 'green';
        }
        flag = true;
      }
    }

    return flag;
  }
}
