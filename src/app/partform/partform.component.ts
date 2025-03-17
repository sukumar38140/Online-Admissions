import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-partform',
  imports: [FormsModule, CommonModule],
  templateUrl: './partform.component.html',
  styleUrl: './partform.component.css'
})
export class PartformComponent {

  fatherAlumni: string = '';
  falumniRollNumber: string = '';

  motherAlumni: string = '';
  malumniRollNumber: string = '';

  onFatherAlumniChange() {
    // You can add additional logic here if needed
  }

  onMotherAlumniChange() {
    // You can add additional logic here if needed
  }
}
