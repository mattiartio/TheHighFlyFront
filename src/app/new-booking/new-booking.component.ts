import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Booking} from '../_model/booking';
import {BookingService} from '../_services/booking.service';
import {Transport} from "../_model/transport";
import {ResponseMessage} from "../_model/responseMessage";

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})

export class NewBookingComponent implements OnInit {
  booking: Booking;
  transportLoaded: boolean;
  transport: Transport;
  transportList: Transport[];

  constructor(private router: Router, private bookingService: BookingService) {
    this.booking = new Booking();
    this.transport = new Transport();
    this.transportList = new Array<Transport>();
    this.transportLoaded = false;
  }

  ngOnInit() {
  }

  newBooking() {
    this.router.navigate(['newbookings']);
  }

  findAvailable() {
    // tslint:disable-next-line:max-line-length
    this.bookingService.getAvailableTransports(this.transport.vehicle, this.transport.dateFrom, this.transport.dateTo, this.transport.maxSeats).subscribe(
      response => {
        const succ = response;
        if (succ) {
          this.transportLoaded = true;
          this.transportList = (response as ResponseMessage).data;
        } else {
          console.log('booking non aggiunto');
        }
      }
    );
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


