import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable(); // ✅ Components can subscribe to this

  login() {
    this.isLoggedInSubject.next(true); // ✅ Update login state
  }

  logout() {
    this.isLoggedInSubject.next(false); // ✅ Update login state
  }

  checkLoginStatus() {
    return this.isLoggedInSubject.value; // ✅ Get current value
  }
}
