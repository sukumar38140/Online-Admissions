import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iruser } from '../iruser';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-preview-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="show" class="modal">
      <div class="modal-content">
        <span class="close" (click)="closeModal()">&times;</span>
        <h4>Print Preview:</h4>
        <div *ngIf="data">
          <p><strong>Name:</strong> {{ data.name }}</p>
          <p><strong>Mobile:</strong> {{ data.mobile }}</p>
          <p><strong>Application ID:</strong> {{ data.appid }}</p>
          <p><strong>Department:</strong> {{ data.department }}</p>
          <p><strong>Email:</strong> {{data.email}}</p>
          <p><strong>Father Name:</strong> {{data.fathername}}</p>
          <p><strong>Quota Type:</strong> {{data.quotatype}}</p>
          <!-- Add more fields as needed -->
        </div>
        <button (click)="closeModal()">Close</button>
      </div>
    </div>
  `,
  styles: [`
    .modal {
      display: block;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.5);
    }
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 500px;
      border-radius: 5px;
      text-align: center;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      /* padding: 10px;
      text-align: center; */
    }
    button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 15px;
    }
    button:hover {
      background-color: #45a049;
    }
  `]
})
export class PreviewModalComponent {
  @Input() show: boolean = false;
  @Input() data: Iruser | null = null;
  @Output() closed = new EventEmitter<void>();

   downloadData() {
        console.log('downloadData() called in PreviewModalComponent');

        if (!this.data) {
            console.error('No data to download!');
            return;
        }

        console.log('Data to download:', this.data);

        const doc = new jsPDF();
        doc.text('User Data', 10, 10);

        // Define the table headers
        const headers = [['Name', 'Mobile', 'App ID', 'Department', 'Email', 'Father Name', 'Quota Type']];

        // Add the data to the table
        const dataTable = [
            [this.data.name, this.data.mobile.toString(), this.data.appid.toString(), this.data.department, this.data.email, this.data.fathername, this.data.quotatype]
        ];

        // Use jspdf-autotable plugin to add the table
        try {
            (doc as any).autoTable({
                head: headers,
                body: dataTable,
            });
            console.log('PDF table generated successfully');
        } catch (error) {
            console.error('Error generating PDF table:', error);
            return;
        }

        try {
            doc.save('data.pdf');
            console.log('PDF saved successfully');
        } catch (error) {
            console.error('Error saving PDF:', error);
        }
    }

  closeModal() {
    this.show = false;
    this.closed.emit();
  }
}