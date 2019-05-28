import { Component, OnInit } from '@angular/core';
import {Booking} from '../_model/booking';
import {Router} from '@angular/router';
import {BookingService} from '../_services/booking.service';
import {ResponseMessage} from '../_model/responseMessage';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingTableHeader: string;
  bookingData: Booking[];
  constructor(private router: Router, private bookingService: BookingService) {
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.bookingService.getBookings().subscribe (
      response => {
        let responseMessage: ResponseMessage;
        responseMessage = response as ResponseMessage;
        this.bookingData = (responseMessage.data as Booking[]);
        console.log(this.bookingData);
      },
      error => {
        console.log('Errore: ' + error.message);
      }
    );
  }

  selectBooking(id : number) {

  }

  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id).subscribe(
      response => {
        alert('Cancellato con successo');
        this.router.navigate(['bookings']);

      },
      error => {
        alert('Errore nella cancellazione');
      }
    );
  }

}
