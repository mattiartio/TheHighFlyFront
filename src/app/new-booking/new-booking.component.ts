import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Booking} from '../_model/booking';
import {BookingService} from '../_services/booking.service';
import {Transport} from "../_model/transport";
import {ResponseMessage} from "../_model/responseMessage";
import {Vehicle} from '../_model/vehicle';

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
  vehicles: Vehicle[];

  constructor(private router: Router, private bookingService: BookingService) {
    this.booking = new Booking();
    this.transport = new Transport();
    this.transportList = new Array<Transport>();
    this.transportLoaded = false;
    this.vehicles = new Array<Vehicle>();
  }

  ngOnInit() {
    this.bookingService.getVehicleTypes().subscribe(
        response => {
          this.vehicles = (response as ResponseMessage).data;
        }
    );
  }


  newBooking() {
    this.router.navigate(['newbookings']);
  }

  findAvailable() {
    // tslint:disable-next-line:max-line-length
    console.log(this.transport);
    this.bookingService.getAvailableTransports(this.transport.vehicle, this.transport.dateFrom, this.transport.dateTo, this.transport.numPosti).subscribe(
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
}


