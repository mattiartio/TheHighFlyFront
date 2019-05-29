import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingService} from '../_services/booking.service';
import {Transport} from '../_model/transport';


@Component({
  selector: 'app-available-transport',
  templateUrl: './available-transport.component.html',
  styleUrls: ['./available-transport.component.css']
})
export class AvailableTransportComponent implements OnInit {

  @Input('transportList') transportList: Transport[];

  constructor(private route: ActivatedRoute, private  router: Router, private bookingService: BookingService) { }

  ngOnInit() {
  }

  /*
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
  }*/

}
