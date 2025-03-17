import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyregisterComponent } from '../myregister/myregister.component';
import { Form01Component } from '../form01/form01.component';


@Component({
  selector: 'app-mylogin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css'], 
})

export class MyloginComponent {

  email: string = '';
  dateOfBirth: string = '';
  
  constructor(private router: Router) { }
  login() {
    this.router.navigate(['/mylogin']);
  }
  register(){
    this.router.navigate(['/myregister'] );
  }

  loginData() {
    console.log('Email:', this.email, 'DOB:', this.dateOfBirth); 

    if (this.email.trim() === 'temp@example.com' && this.dateOfBirth.trim() === '2000-01-01') {
      console.log('Navigating to Form01'); 
      this.router.navigate(['/form01']);
    } else {
      alert('Invalid credentials. Please use the temporary email and date of birth.');
    }
  }
}
