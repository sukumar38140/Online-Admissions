import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Iruser } from '../iruser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accpform',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './accpform.component.html',
  styleUrl: './accpform.component.css',
  standalone: true, 
  })
  
  export class AccpformComponent {
  applicationId: string = '';
  fullName: string = '';
  fatherName: string = '';
  quota: string = '';
  department: string = '';
  date: Date | null = null;
  paymentType: string = 'cash';
  cashPaymentType: string = 'partial';
  onlinePaymentType: string = 'partial';
  tuitionFee: string = 'Rs.67,800/-';
  amountPaid: number | null = null;
  admissionApp: number | null = 3000;
  miscellaneous: number | null = 4000;
  concessionDiscount: number | null = 0;
  outstanding: number | null = null;
  bankName: string = '';
  upiRef: string = '';
  paymentDate: Date | null = null;
  fiveHundredCount: number | null = null;
  twoHundredCount: number | null = null;
  oneHundredCount: number | null = null;
  fiftyCount: number | null = null;
  twentyCount: number | null = null;
  tenCount: number | null = null;
  othersAmount: number | null = null;
  totalDenominationAmount: number | null = null;

  constructor(private router: Router) {}

  navigateToAccp() {
    this.router.navigate(['/accp']);
  }

  generatePayment() {
    this.calculateOutstanding();
  }

  calculateOutstanding() {
    const total = parseFloat(this.tuitionFee.replace('Rs.', '').replace(',', '').replace('/-', ''));
    const paid = this.amountPaid || 0;
    const app = this.admissionApp || 3000;
    const misc = this.miscellaneous || 4000;
    const discount = this.concessionDiscount || 0;

    this.outstanding = total - paid - app - misc + discount;
  }

  calculateTotal() {
    this.totalDenominationAmount = 0;

    if (this.fiveHundredCount) this.totalDenominationAmount += this.fiveHundredCount * 500;
    if (this.twoHundredCount) this.totalDenominationAmount += this.twoHundredCount * 200;
    if (this.oneHundredCount) this.totalDenominationAmount += this.oneHundredCount * 100;
    if (this.fiftyCount) this.totalDenominationAmount += this.fiftyCount * 50;
    if (this.twentyCount) this.totalDenominationAmount += this.twentyCount * 20;
    if (this.tenCount) this.totalDenominationAmount += this.tenCount * 10;
    if (this.othersAmount) this.totalDenominationAmount += this.othersAmount;
  }

  updatePaymentFields(): void {
    if (this.paymentType === 'online') {
      // Logic to calculate outstanding amount for online payments
      const total = parseFloat(this.tuitionFee.replace('Rs.', '').replace(',', '').replace('/-', ''));
      const paid = this.amountPaid || 0;
      const app = this.admissionApp || 0;
      const misc = this.miscellaneous || 0;
      const discount = this.concessionDiscount || 0;
      this.calculateOutstanding();  
      this.outstanding = total - paid - app - misc + discount;
    }
  }  
}