import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iruser } from '../iruser';

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
            <p><strong>Father Name:</strong>{{data.fathername}}</p>
            <p><strong>Quota Type:</strong>{{data.quotatype}}</p>
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

  closeModal() {
    this.show = false;
    this.closed.emit();
  }
}