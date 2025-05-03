import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Iruser } from '../iruser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PreviewModalComponent } from '../preview-modal/preview-modal.component';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
    selector: 'app-crud',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, PreviewModalComponent],
    templateUrl: './crud.component.html',
    styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {

    apiData: Iruser[] = [];
    filteredApiData: Iruser[] = [];
    temporaryApplicationId = new FormControl('');
    isSearchInvalid: boolean = false;
    validationMessage = '';
    showPreviewModal = false;
    previewData: Iruser | null = null;

    // --- Helper functions for random data ---
    private generateDevotionalName(): string {
        const names = ['Krishna', 'Shiva', 'Ganesha', 'Lakshmi', 'Saraswati', 'Vishnu', 'Durga', 'Rama', 'Hanuman', 'Kali'];
        return names[Math.floor(Math.random() * names.length)];
    }

   private generateRandomMobile(): string {
        const firstDigit = Math.floor(Math.random() * 4) + 6; // Generates a random number between 6 and 9
        const remainingDigits = Math.floor(Math.random() * 1000000000); // Generates a random 9-digit number
        return  firstDigit.toString() + remainingDigits.toString().padStart(9, '0'); // Combines the first digit with the remaining digits
    }

    private generateRandomDepartment(): string {
        const departments = ['Computer Science and Engineering', 'Information Technology', 'Electronics and Communication Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Artificial Intelligence and Machine Learning'];
        return departments[Math.floor(Math.random() * departments.length)];
    }
    // --- End Helper functions ---

    constructor(private crud: CrudService, private router: Router) { }

    ngOnInit(): void {
        this.loadAllData();
    }

    loadAllData() {
        this.crud.getData().subscribe(res => {
            this.apiData = res;
            this.filteredApiData = this.apiData;
        });
    }

    searchData() {
        console.log('searchData called');
        const tempIdString = this.temporaryApplicationId.value?.trim() ?? '';
        console.log('tempIdString:', tempIdString);

        this.isSearchInvalid = false;
        this.validationMessage = '';
        this.filteredApiData = [];

        // Validation Checks
        if (!tempIdString) {
            console.log('Validation failed: Input is empty');
            this.isSearchInvalid = true;
            this.validationMessage = 'Application ID cannot be empty.';
        } else if (tempIdString.length < 3) {
            console.log('Validation failed: Input too short');
            this.isSearchInvalid = true;
            this.validationMessage = 'Application ID must be at least 3 characters long.';
        } else if (!/^[a-zA-Z0-9]+$/.test(tempIdString)) {
            console.log('Validation failed: Input not alphanumeric');
            this.isSearchInvalid = true;
            this.validationMessage = 'Application ID can only contain letters and numbers.';
        } else {
            console.log('Validation failed: Input is correct');
        }

        console.log('isSearchInvalid:', this.isSearchInvalid);
        console.log('validationMessage:', this.validationMessage);

        // Proceed only if input is valid
        if (!this.isSearchInvalid) {
            console.log('Validation passed. Searching...');
            const results = this.apiData.filter(data =>
                data.appid?.toString().toLowerCase().includes(tempIdString.toLowerCase())
            );

            if (results.length > 0) {
                this.filteredApiData = results;
            } else {
                console.log('No results found. Creating dummy data.');
                this.filteredApiData = [{
                    id: 0,
                    name: this.generateDevotionalName(),
                    mobile: Number(this.generateRandomMobile()),
                    appid: 0,
                    department: this.generateRandomDepartment(),
                    email: 'dummy@example.com',
                    fathername: 'Dummy Father',
                    quotatype: 'Dummy Quota',
                    searchedAppId: tempIdString
                }];
        }   
        } else {
            console.log('Validation failed. Clearing results.');
            this.filteredApiData = [];
        }

        console.log('filteredApiData:', this.filteredApiData);
    }

    printData(data: Iruser) {
        this.previewData = data;
        this.showPreviewModal = true;
        console.log('Previewing data:', data);
    }

    closePreviewModal() {
        this.showPreviewModal = false;
        this.previewData = null;
    }

   downloadData(data: Iruser) {
        try {
            const doc = new jsPDF();
            
            // Add header with styling
            doc.setFillColor(51, 122, 183);
            doc.rect(0, 0, 210, 20, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(16);
            doc.text('MITS - Student Information', 105, 15, { align: 'center' });
            
            // Reset text color for content
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(12);
            
            // Add content with better formatting
            const startY = 40;
            const lineHeight = 12;
            const labels = [
                'Name',
                'Mobile',
                'Application ID',
                'Department',
                'Email',
                'Father Name',
                'Quota Type'
            ];
            const values = [
                data.name,
                data.mobile.toString(),
                data.searchedAppId || data.appid.toString(),
                data.department,
                data.email,
                data.fathername,
                data.quotatype
            ];
            
            // Add content with alternating background
            labels.forEach((label, index) => {
                const yPos = startY + (lineHeight * index);
                if (index % 2 === 0) {
                    doc.setFillColor(240, 240, 240);
                    doc.rect(20, yPos - 5, 170, 10, 'F');
                }
                doc.text(`${label}: `, 25, yPos);
                doc.text(values[index], 70, yPos);
            });
            
            // Add footer
            const pageHeight = doc.internal.pageSize.height;
            doc.setFontSize(10);
            doc.text('Generated on: ' + new Date().toLocaleString(), 20, pageHeight - 10);
            
            // Save PDF with formatted name
            const fileName = `MITS_${data.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
            doc.save(fileName);
            console.log('PDF generated successfully:', fileName);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    }

    onLogout() {
        console.log('Logging out and navigating to mylogin...');
        localStorage.removeItem('token');
        this.router.navigate(['/mylogin']);
    }
}
