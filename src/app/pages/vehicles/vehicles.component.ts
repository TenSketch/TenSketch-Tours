import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  vehicles = [
    { name: 'Toyota Innova', type: 'SUV', image: 'innova.png', price: 3000 },
    { name: 'Maruti Swift', type: 'Hatchback', image: 'swift.png', price: 1500 },
    { name: 'Mercedes Benz', type: 'Luxury', image: 'benz.png', price: 8000 }
  ];

  constructor(private router: Router) {}

  bookVehicle(vehicle: any) {
    this.router.navigate(['/booking'], { state: { vehicle } });
  }
}
