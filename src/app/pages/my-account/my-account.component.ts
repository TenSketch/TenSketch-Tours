import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // ✅ Import AuthService

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  isLoggedIn = false;

  user = {
    name: 'Balachandiran | TenSketch',
    profilePic: 'assets/images/balaprofilepic-1.jpg',
  };

  constructor(private router: Router, private authService: AuthService) {
    this.isLoggedIn = this.authService.checkLoginStatus(); // ✅ Get login status
  }

  logout() {
    this.authService.logout(); // ✅ Use AuthService to log out
    this.router.navigate(['/sign-in']);
  }
}
