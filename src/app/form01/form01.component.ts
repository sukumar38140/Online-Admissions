import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PerformComponent } from '../perform/perform.component';
import { QualformComponent } from '../qualform/qualform.component';
import { PartformComponent } from "../partform/partform.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form01',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PerformComponent, QualformComponent, PartformComponent],
  templateUrl: './form01.component.html',
  styleUrl: './form01.component.css'
})
export class Form01Component implements OnInit {

  form01Form: FormGroup;
  temporaryApplicationId: string = 'MITS-6925';

  constructor(private router: Router) {
    this.form01Form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
      // Add more form controls as needed
    });
  }

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

  onSubmit() {
    if (this.form01Form.valid) {
      console.log('Form submitted:', this.form01Form.value);
      // Here, you would typically send the form data to a service (e.g., CrudService)
    } else {
      // Trigger validation to display errors
      Object.values(this.form01Form.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  closeApplication() {
    this.router.navigate(['/mylogin']);
  }
}
