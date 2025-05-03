
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
      <div class="modal-content print-view">
        <div class="print-header">
          <img src="../../public/images/college_logo.png" alt="College Logo" class="logo">
          <h2>Student Information Preview</h2>
        </div>
        <div class="print-body">
          <div *ngIf="data" class="data-grid">
            <div class="data-row">
              <div class="label">Name:</div>
              <div class="value">{{ data.name }}</div>
            </div>
            <div class="data-row">
              <div class="label">Mobile:</div>
              <div class="value">{{ data.mobile }}</div>
            </div>
            <div class="data-row">
              <div class="label">Application ID:</div>
              <div class="value">{{ data.appid }}</div>
            </div>
            <div class="data-row">
              <div class="label">Department:</div>
              <div class="value">{{ data.department }}</div>
            </div>
            <div class="data-row">
              <div class="label">Email:</div>
              <div class="value">{{ data.email }}</div>
            </div>
            <div class="data-row">
              <div class="label">Father Name:</div>
              <div class="value">{{ data.fathername }}</div>
            </div>
            <div class="data-row">
              <div class="label">Quota Type:</div>
              <div class="value">{{ data.quotatype }}</div>
            </div>
          </div>
        </div>
        <div class="button-group">
          <button class="print-button" (click)="window.print()">Print</button>
          <button class="download-button" (click)="downloadData()">Download PDF</button>
          <button class="close-button" (click)="closeModal()">Close</button>
        </div>
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
      background-color: #ffffff;
      margin: 5% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 90%;
      max-width: 800px;
      border-radius: 8px;
    }
    .print-header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #333;
    }
    .logo {
      max-width: 150px;
      margin-bottom: 15px;
    }
    .print-body {
      padding: 20px;
    }
    .data-grid {
      display: grid;
      gap: 15px;
    }
    .data-row {
      display: grid;
      grid-template-columns: 200px 1fr;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
    }
    .label {
      font-weight: bold;
      color: #333;
    }
    .value {
      color: #666;
    }
    .button-group {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 30px;
    }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
    .print-button {
      background-color: #4CAF50;
      color: white;
    }
    .download-button {
      background-color: #2196F3;
      color: white;
    }
    .close-button {
      background-color: #f44336;
      color: white;
    }
    @media print {
      .modal {
        position: absolute;
        background: none;
      }
      .modal-content {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      .button-group {
        display: none;
      }
      .print-header {
        margin-bottom: 20px;
      }
      .data-row {
        page-break-inside: avoid;
      }
    }
  `]
})
export class PreviewModalComponent {
  @Input() show: boolean = false;
  @Input() data: Iruser | null = null;
  @Output() closed = new EventEmitter<void>();
  window = window;

  downloadData() {
    if (!this.data) {
      console.error('No data to download!');
      return;
    }

    const doc = new jsPDF();
    doc.text('Student Information', 10, 10);

    const headers = [['Field', 'Value']];
    const dataTable = [
      ['Name', this.data.name],
      ['Mobile', this.data.mobile.toString()],
      ['Application ID', this.data.appid.toString()],
      ['Department', this.data.department],
      ['Email', this.data.email],
      ['Father Name', this.data.fathername],
      ['Quota Type', this.data.quotatype]
    ];

    try {
      (doc as any).autoTable({
        head: headers,
        body: dataTable,
        startY: 20,
        theme: 'grid'
      });
      doc.save('student-information.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }

  closeModal() {
    this.show = false;
    this.closed.emit();
  }
}
