import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  link: string;
  icon?: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    { name: 'Home', link: '/home', icon: 'fa-home' },
    { name: 'About Us', link: '/about-us', icon: 'fa-info-circle' },
    { name: 'Our Services', link: '/our-services', icon: 'fa-cogs' },
    { name: 'Tourism', link: '/tourism', icon: 'fa-map-marked-alt' },
    { name: 'Vehicles', link: '/vehicles', icon: 'fa-car' },
    // { name: 'Offers', link: '/offers', icon: 'fa-tags' },
    // { name: 'Support', link: '/support', icon: 'fa-headset' },
    { name: 'Phone', link: 'tel:+919876543210', icon: 'fa-phone' },
    { name: 'Email', link: 'mailto:info@cabs.com', icon: 'fa-envelope' }
  ];
}
