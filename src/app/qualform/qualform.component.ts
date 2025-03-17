import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qualform',
  imports: [FormsModule, CommonModule],
  templateUrl: './qualform.component.html',
  styleUrl: './qualform.component.css'
})

export class QualformComponent {
  qualifyingExam: string = '';
  allotmentNumber: string = '';
  allotmentDate: Date | null = null;
  entranceRollNumber: string = '';
  rank: number | null = null;
  entranceScore: number | null = null;
  actualCategory: string = '';
  allocatedCategory: string = '';
  
  onQualifyingExamChange() {
    // You can add additional logic here if needed
  }
}
