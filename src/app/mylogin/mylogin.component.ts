import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyregisterComponent } from '../myregister/myregister.component';

@Component({
  selector: 'app-mylogin',
  imports: [],
  templateUrl: './mylogin.component.html',
  styleUrl: './mylogin.component.css'
})
export class MyloginComponent {
  constructor(private router: Router) { }
  // register() {
  //   this.router.navigate(['myregister'])
  //     .catch(error => {
  //       console.error('Navigation error:', error);
  //     });
  // }
  login() {
    this.router.navigate(['mylogin']);
  }
  register(){
    this.router.navigate(['myregister']);
  }
}
