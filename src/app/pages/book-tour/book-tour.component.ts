import { Component } from '@angular/core';
@Component({
  selector: 'app-book-tour',
  templateUrl: './book-tour.component.html',
  styleUrls: ['./book-tour.component.scss']
})
export class BookTourComponent {
  tourPackages = ['Singapore City Tour', 'Universal Studios', 'Sentosa Island Tour'];
  selectedPackage = this.tourPackages[0];
  tourDate: string = '';
  guestCount: number = 1;

  submitBooking() {
    alert(`Booking confirmed for ${this.selectedPackage} on ${this.tourDate} for ${this.guestCount} guests.`);
  }
}
