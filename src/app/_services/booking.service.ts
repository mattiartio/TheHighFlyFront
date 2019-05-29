import { Injectable } from '@angular/core';
import {BaseApiService} from './base-api-service.service';
import {HttpClient} from '@angular/common/http';
import {Booking} from '../_model/booking';
import {Observable} from 'rxjs';
import {ResponseMessage} from '../_model/responseMessage';
import {Transport} from '../_model/transport';


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


  createBookings(name: string, surname: string, transportViewBean: Transport, dateFrom: Date, dateTo: Date, price: number, seats: number) {
    let newBooking: Booking;
    newBooking = new Booking();
    const succ = new Observable<boolean>(
      (observer) => {
        const url = this.buildRemoteRestUrl('bookings/create');
        newBooking.name = name;
        newBooking.surname = surname;
        newBooking.transportViewBean = transportViewBean;
        newBooking.dataFrom = dateFrom;
        newBooking.dataTo = dateTo;
        newBooking.price = price;
        newBooking.seats = seats;
        this.http.post(url, newBooking).subscribe(
          response => {
            if (this.validation(response as ResponseMessage)) {
              //sessionuser = (response[0] as User); // sessionuser = (<User>response[0]);
              console.log('booking aggiunto');
              // salvataggio dell'utente loggato
              // sblocco l'observable con OK
              observer.next(true);
              observer.complete();
            } else {
              alert('' + response['responseStatus'] );
              console.log('booking non aggiunto');
              // Sblocco dell'observable con KO
              observer.next(false);
              observer.complete();
            }
          }
        );
      }
    );
    return succ;
  }
  getBookingDetail(id: number) {
    const url = this.buildRemoteRestUrl('bookings/detail/' + id);
    return this.http.get(url);
  }
}
