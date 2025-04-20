import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  login(username: string, password: string) {
    // Placeholder authentication logic
    if (username === 'user' && password === 'password') {
      this.loggedIn.next(true);
      localStorage.setItem('token', 'fakeToken'); // Store a fake token
      this.router.navigate(['/crud']);
    } else {
      alert('Invalid credentials');
    }
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/mylogin']);
  }
}