import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  vehicle: any;

  constructor(private router: Router) {
    this.vehicle = this.router.getCurrentNavigation()?.extras.state?.['vehicle'] || {};
  }

  confirmBooking() {
    // Redirect to payment page (You can pass booking details via state)
    this.router.navigate(['/payment'], { state: { vehicle: this.vehicle } });
  }
}
