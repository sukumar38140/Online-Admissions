import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-success-modal',
  standalone: true, // Make standalone
  imports: [CommonModule], // Import CommonModule
  template: `
    <div *ngIf="show" class="modal">
      <div class="modal-content">
        <span class="close" (click)="closeModal()">&times;</span>
        <h4>Success!</h4>
        <p>{{ message }}</p>
        <button (click)="closeModal()">Close</button>
      </div>
    </div>
  `,
  styles: [`
    .modal {
      display: block; /* Changed from block to rely on *ngIf */
      position: fixed;
      z-index: 1000; /* Ensure it's on top */
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.5); /* Darker background */
    }
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 500px; /* Max width */
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
      background-color: #4CAF50; /* Green */
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
export class SuccessModalComponent {
  @Input() show: boolean = false; // Input to control visibility
  @Input() message: string = 'Operation completed successfully!'; // Customizable message
  @Output() closed = new EventEmitter<void>(); // Output event for closing

  closeModal() {
    this.show = false; // Hide the modal
    this.closed.emit(); // Emit the closed event
  }
}