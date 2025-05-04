
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qualform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './qualform.component.html',
  styleUrl: './qualform.component.css'
})

export class QualformComponent {
  submitted: boolean = false;
  entranceExam: string = '';
  actualCategory: string = '';
  allocatedCategory: string = '';
  domicile: string = '';
  qualifyingExam: string = '';
  allotmentNumber: string = '';
  allotmentDate: Date | null = null;
  entranceRollNumber: string = '';
  rank: number | null = null;
  entranceScore: number | null = null;
  prevCollegeName: string = '';
  prevCollegeAddress: string = '';
  courseStudied: string = '';
  courseResult: string = '';
  
  onQualifyingExamChange() {
    if (this.qualifyingExam !== 'yes') {
      this.allotmentNumber = '';
      this.allotmentDate = null;
      this.entranceRollNumber = '';
      this.rank = null;
      this.entranceScore = null;
    }
  }

  onSubmit() {
    this.validateForm();
  }

  validateForm(): boolean {
    this.submitted = true;

    const isBasicFieldsValid = !!(
        this.entranceExam &&
        this.actualCategory?.trim() &&
        this.allocatedCategory?.trim() &&
        this.domicile &&
        this.qualifyingExam &&
        this.prevCollegeName?.trim() &&
        this.prevCollegeAddress?.trim() &&
        this.courseStudied?.trim() &&
        this.courseResult?.trim()
    );
    
    if (!isBasicFieldsValid) {
      alert('Please fill in all required fields marked with *');
      return false;
    }

    if (this.qualifyingExam === 'yes') {
      if (!this.allotmentNumber?.trim() ||
          !this.allotmentDate ||
          !this.entranceRollNumber?.trim() ||
          !this.rank ||
          !this.entranceScore) {
        return false;
      }
    }

    return true;
  }
}
