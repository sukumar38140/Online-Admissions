import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perform',
  // standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './perform.component.html',
  styleUrl: './perform.component.css'
})
export class PerformComponent implements AfterViewInit {
  @ViewChild('sub') subInput!: ElementRef;
  @ViewChild('msg') msgInput!: ElementRef;

  isHandicapped: boolean | null = null; // Tracks the selected radio button value
  physicallyChallenged: string = ''; // Tracks the Physically Challenged dropdown value
  visuallyChallenged: string = ''; // Tracks the Visually Challenged dropdown value

  constructor() {}

  // Function to handle changes in the "Handicapped" radio buttons
  onHandicappedChange() {
    if (this.isHandicapped === false) {
      // Reset dropdown values if "No" is selected
      this.physicallyChallenged = '';
      this.visuallyChallenged = '';
    }
  }

  currentStep = 1;
  customCheck1 = true;
  subject = '';
  message = '';

  ngAfterViewInit() {
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

    return flag;
  }
}
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form-01',
//   imports: [],
//   templateUrl: './form01.component.html',
//   styleUrl: './form01.component.css'
// })
// export class Form01Component {

// }
