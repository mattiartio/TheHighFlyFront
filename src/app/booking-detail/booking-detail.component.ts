import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Booking} from '../_model/booking';
import {BookingService} from '../_services/booking.service';
import {ResponseMessage} from '../_model/responseMessage';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  booking: Booking;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookingService: BookingService) { }

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

}
