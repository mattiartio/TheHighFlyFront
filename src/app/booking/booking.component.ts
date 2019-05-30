import { Component, OnInit } from '@angular/core';
import {Booking} from '../_model/booking';
import {Router} from '@angular/router';
import {BookingService} from '../_services/booking.service';
import {ResponseMessage} from '../_model/responseMessage';
import {AuthService} from "../_services/auth-service.service";

@Component({

  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingTableHeader: string;
  bookingData: Booking[];
  constructor(private router: Router, private bookingService: BookingService, private authService: AuthService) {
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    if(this.authService.getLoggedUserFromSessionStorage().isAdmin()) {
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
    } else {
      this.bookingService.getUserBookings().subscribe (
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






  }

  selectBooking(id: number) {
    this.router.navigate(['bookings', id, 'edit']);
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

  showBooking(id: number) {
    this.router.navigate(['bookings', id, 'detail']);
  }

}
