import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MyloginComponent } from '../mylogin/mylogin.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myregister',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './myregister.component.html',
  styleUrl: './myregister.component.css'
})
// export class MyregisterComponent {
  export class MyregisterComponent { 
    reactiveForm : FormGroup;
    submitted = false;
  
    constructor(private router: Router, private registerform: FormBuilder) {
      this.router = router; 
      this.reactiveForm = this.registerform.group({
        fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
        gender: ['',  Validators.required],
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
        mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        dateofbirth: ['', [Validators.required]],
        coursetype: ['', [Validators.required]],
        terms: [false, Validators.requiredTrue]
      });
    }

    get fullName() { return this.reactiveForm.get('fullName'); }
    get gender() { return this.reactiveForm.get('gender'); }
    get email() { return this.reactiveForm.get('email'); }
    get mobilenumber() { return this.reactiveForm.get('mobilenumber'); }
    get dateofbirth() { return this.reactiveForm.get('dateofbirth'); }
    get coursetype() { return this.reactiveForm.get('coursetype'); }
    get terms() { return this.reactiveForm.get('terms'); }
  
    onSubmit() {
      this.submitted = true;

      if (this.reactiveForm.invalid) {
        alert('Please fill in all required fields correctly');
        return;
      }

      console.log(this.reactiveForm.value);
      this.router.navigate(['/form01']).then(() => {
        // Reset form after successful navigation
        this.reactiveForm.reset();
        this.submitted = false;
      });
    }

    login() {
      this.router.navigate(['mylogin']);
    }
  
    register() {
      this.router.navigate(['myregister']);
    }
  
}