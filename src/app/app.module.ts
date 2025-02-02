import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { BookingComponent } from './pages/booking/booking.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { TourismComponent } from './pages/tourism/tourism.component';
import { BookTourComponent } from './pages/book-tour/book-tour.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AppComponent,
    HomeComponent,
    VehiclesComponent,
    BookingComponent,
    PaymentComponent,
    ConfirmationComponent,
    MyBookingsComponent,
    SignInComponent,
    SignUpComponent,
    MyAccountComponent,
    AboutUsComponent,
    OurServicesComponent,
    TourismComponent,
    BookTourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
