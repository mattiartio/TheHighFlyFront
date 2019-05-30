import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingService} from '../_services/booking.service';
import {Transport} from '../_model/transport';
import {Booking} from '../_model/booking';
import {AuthService} from '../_services/auth-service.service';


@Component({
  selector: 'app-available-transport',
  templateUrl: './available-transport.component.html',
  styleUrls: ['./available-transport.component.css']
})
export class AvailableTransportComponent implements OnInit {

  @Input('transportList') transportList: Transport[];
  @Input('booking') booking: Booking;
  transport: Transport;


  constructor(private route: ActivatedRoute, private  router: Router, private bookingService: BookingService, private authService: AuthService) { }

  ngOnInit() {

  }
  createBooking(transport: Transport) {
    this.booking.transportViewBean = transport;
    this.booking.username = this.authService.getLoggedUserFromSessionStorage().username;
    // tslint:disable-next-line:max-line-length
    this.bookingService.createBookings(this.booking.username, this.booking.name, this.booking.surname, this.booking.transportViewBean, transport.dateFrom, transport.dateTo, this.booking.price, transport.numPosti).subscribe(
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
