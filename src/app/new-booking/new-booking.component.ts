import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Booking} from '../_model/booking';
import {BookingService} from '../_services/booking.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})

export class NewBookingComponent implements OnInit {
  booking: Booking;

  constructor(private router: Router, private bookingService: BookingService) {
    this.booking = new Booking();
  }

  ngOnInit() {
  }

  newBooking() {
    this.router.navigate(['newbookings']);
  }


  createBooking() {
    // tslint:disable-next-line:max-line-length
    this.bookingService.createBookings(this.booking.name, this.booking.surname, this.booking.transportViewBean, this.booking.dataFrom, this.booking.dataTo, this.booking.price, this.booking.seats).subscribe(
      response => {
        const succ = response;
        if (succ) {
          console.log('booking aggiunto');
          this.router.navigate(['bookings']);
        } else {
          console.log('booking non aggiunto');
        }
      }
    );
  }
}


