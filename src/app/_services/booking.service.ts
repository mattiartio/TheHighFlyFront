import { Injectable } from '@angular/core';
import {BaseApiService} from './base-api-service.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookingService extends BaseApiService {
  constructor(private http: HttpClient) {
    super(http);
  }

  getBookings() {
    const url = this.buildRemoteRestUrl('bookings/listall');
    return this.http.get(url);
  }

  deleteBooking(bookingId: number) {
    const url = this.buildRemoteRestUrl('bookings/delete/' + bookingId);
    console.log(url);
    return this.http.get(url);
  }
}
