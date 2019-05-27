import { Component, OnInit } from '@angular/core';
import {Booking} from '../_model/booking';
import {Router} from '@angular/router';
import {BookingService} from '../_services/booking.service';
import {ResponseMessage} from '../_model/responseMessage';
import {User} from '../_model/user';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingTableHeader: string;
  bookingData: Booking[];
  constructor(private route: Router, private bookingService: BookingService) {
  }

  ngOnInit() {
    this.bookingService.getBookings().subscribe (
      response => {
        let responseMessage: ResponseMessage;
        responseMessage = response as ResponseMessage;
        this.bookingData = (responseMessage.data as Booking[]);
      },
      error => {
        console.log('Errore: ' + error.message);
      }
    );
  }

}
