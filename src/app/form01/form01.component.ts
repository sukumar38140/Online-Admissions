import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { PerformComponent } from '../perform/perform.component';
import { QualformComponent } from '../qualform/qualform.component';
import { PartformComponent } from '../partform/partform.component';

// const routes: Routes = [
//   { path: '', component: MyloginComponent },
//   { path: 'mylogin', component: MyloginComponent },
//   { path: 'myregister', component: MyregisterComponent },
// ];

@Component({
  selector: 'app-form01',
  standalone: true,
  imports: [FormsModule, CommonModule, PerformComponent, QualformComponent, PartformComponent],
  providers: [CrudService],
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

  constructor(private router: Router, private crudService: CrudService) {}

  @ViewChild('performComponent') performElement: any;
  @ViewChild('qualformComponent') qualformElement: any;
  @ViewChild('partformComponent') partformElement: any;

  saveFormData() {
    if (!this.performElement || !this.qualformElement || !this.partformElement) {
      console.error('One or more form components not found');
      return;
    }

    const formData = {
      id: Math.floor(Math.random() * 1000),
      appid: parseInt(this.temporaryApplicationId.replace('MITS-', '')),
      name: this.performElement?.name || '',
      mobile: this.performElement?.mobile || '',
      email: this.performElement?.email || '',
      department: this.qualformElement?.qualifyingExam || '',
      fathername: this.partformElement?.fatherName || '',
      quotatype: this.qualformElement?.allocatedCategory || ''
    };

    this.crudService.createData(formData).subscribe({
      next: (response: any) => {
        console.log('Form data saved successfully', response);
      },
      error: (error: any) => {
        console.error('Error saving form data', error);
      }
    });
  }

  onHandicappedChange() {
    if (this.isHandicapped === false) {
      this.physicallyChallenged = '';
      this.visuallyChallenged = '';
    }
  }

  ngAfterViewInit() {}

  nextStep(step: number) {
    if (step === 5) {
      this.saveFormData();
    }
    if (step === 6 && this.confirmationSection) {
      this.confirmationContent = this.confirmationSection.nativeElement.innerHTML;
    }
    if (this.currentStep === 1) {
      if (!this.customCheck1) {
        alert('Please agree to the terms and conditions to proceed');
        return;
      }
      this.currentStep = step;
    } 
    else if (this.currentStep === 2) {
      if (this.performElement && !this.performElement.validateForm()) {
        alert('Please fill all required personal details correctly');
        return;
      }
      this.currentStep = step;
    }
    else if (this.currentStep === 3) {
      if (this.qualformElement && !this.qualformElement.validateForm()) {
        alert('Please fill all required qualification details correctly');
        return;
      }
      this.currentStep = step;
    }
    else if (this.currentStep === 4) {
      if (this.partformElement && !this.partformElement.validateForm()) {
        alert('Please fill all required parent details correctly');
        return;
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
  @ViewChild('confirmationSection') confirmationSection!: ElementRef;
  confirmationContent: string = '';

  closeApplication() {
    this.currentStep = 1;
    this.temporaryApplicationId = '';
    console.log('Application closed.');
    this.router.navigate(['/mylogin']);
  }

  goToStep(step: number) {
    if (step === 1) {
      this.currentStep = step;
    } 
    else if (step === 2 && this.customCheck1) {
      this.currentStep = step;
    }
    else if (step === 3 && this.performElement?.validateForm()) {
      this.currentStep = step;
    }
    else if (step === 4 && this.qualformElement?.validateForm()) {
      this.currentStep = step;
    }
    else if (step === 5 && this.partformElement?.validateForm()) {
      this.currentStep = step;
    }
  }
  
  temporaryApplicationId: string = 'MITS-6925';  
}