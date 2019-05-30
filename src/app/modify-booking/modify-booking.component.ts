import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingService} from '../_services/booking.service';
import {ResponseMessage} from '../_model/responseMessage';
import {Booking} from '../_model/booking';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Component({
  selector: 'app-modify-booking',
  templateUrl: './modify-booking.component.html',
  styleUrls: ['./modify-booking.component.css']
})
export class ModifyBookingComponent implements OnInit {

  booking: Booking;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookingService: BookingService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.bookingService.getBookingDetail(params.id).subscribe(
          (response) => {
            this.booking = (response as ResponseMessage).data;
          },
          (error) => {
            alert('Error');
          }
        );
      }
    );

  }

  modifyBooking() {
    this.bookingService.modifyBooking(this.booking).subscribe(
      response => {
        this.router.navigate(['bookings']);
      }
    );
  }
}
