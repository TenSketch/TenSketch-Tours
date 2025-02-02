import { Component } from '@angular/core';

interface Booking {
  id: number;
  vehicleName: string;
  pickup: string;
  destination: string;
  dateTime: string;
  status: string;
}

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent {
  myBookings: Booking[] = [
    { id: 1, vehicleName: 'Toyota Innova', pickup: 'Chennai', destination: 'Pondicherry', dateTime: '2025-02-02 10:00 AM', status: 'Confirmed' },
    { id: 2, vehicleName: 'Mercedes-Benz S-Class', pickup: 'Bangalore', destination: 'Mysore', dateTime: '2025-02-05 03:00 PM', status: 'Pending' }
  ];
}
