import { Component, OnInit } from '@angular/core'; // Import OnInit
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Iruser } from '../iruser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accp',
  imports: [ CommonModule ],
  templateUrl: './accp.component.html',
  styleUrl: './accp.component.css',
  standalone: true, 
})
export class AccpComponent implements OnInit { 

  apiData: Iruser[] = [];

  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.crud.getData().subscribe(res => { 
      this.apiData = res;
    });
  }

  navigateToAccpform() {
    this.router.navigate(['/accpform']);
  }

  onLogout() {
    console.log('Logging out and navigating to mylogin...');
    localStorage.removeItem('token');
    this.router.navigate(['/mylogin']);
  }
}