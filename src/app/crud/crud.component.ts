import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Iruser } from '../iruser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-crud',
    imports: [ CommonModule, FormsModule],
    templateUrl: './crud.component.html',
    styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {

    apiData: Iruser[] = [];
    filteredApiData: Iruser[] = [];
    temporaryApplicationId = new FormControl('');

    constructor(private crud: CrudService, private router: Router) { }

    ngOnInit(): void {
        this.getAllData();
    }

    // getTemporaryApplicationIdValue() {
    //   return this.temporaryApplicationId.value;
    // }

    // ngOnInit() {
    //   this.temporaryApplicationId.valueChanges.subscribe(value => {
    //     console.log('Temporary Application ID changed:', value);
    //     this.getAllData();
    //   });
    // }    
    getAllData() {
        this.crud.getData().subscribe(res => {
            this.apiData = res;
            this.filteredApiData = res; 
        });
    }

    searchData() {
        const tempId = this.temporaryApplicationId.value;
        if (tempId) {
            this.filteredApiData = this.apiData.filter(data =>
                data.id.toString().toLowerCase().includes(tempId.toLowerCase()) 
            );
        } else {
            this.filteredApiData = this.apiData; 
        }
    }

    onLogout() {
        console.log('Logging out and navigating to mylogin...');
        localStorage.removeItem('token');
        this.router.navigate(['/mylogin']);
    }
}