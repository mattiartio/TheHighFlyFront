import { Injectable } from '@angular/core';
import {BaseApiService} from './base-api-service.service';
import {HttpClient} from '@angular/common/http';
import {Booking} from '../_model/booking';
import {Observable} from 'rxjs';
import {ResponseMessage} from '../_model/responseMessage';
import {Transport} from '../_model/transport';
import {BookingFilter} from "../_model/bookingFilter";
import {User} from "../_model/user";
import {AuthService} from "./auth-service.service";


@Injectable()
export class BookingService extends BaseApiService {
  constructor(private http: HttpClient, private authService: AuthService) {
    super(http);
  }

  getBookings() {
    const url = this.buildRemoteRestUrl('bookings/listall');
    return this.http.get(url);
  }


  getUserBookings() {
    let bookingFilter: BookingFilter;
    bookingFilter = new BookingFilter();
    let currentUser = new User();
    currentUser = this.authService.getLoggedUserFromSessionStorage();

    const succ = new Observable<ResponseMessage>(
      (observer) => {
          const url = this.buildRemoteRestUrl('bookings/filteredList');
          bookingFilter.username = currentUser.username;
          this.http.post(url, bookingFilter).subscribe(
            response => {
              if (this.validation(response as ResponseMessage)) {

                console.log('Lista filtrata');
                observer.next(response as ResponseMessage);
                observer.complete();
              } else {
                alert('' + (response as ResponseMessage).message);
                console.log('Filtro lista fallito');

                observer.next(response as ResponseMessage);
                observer.complete();
              }
            },
            error => {
              let responseMessage: ResponseMessage;
              responseMessage = error as ResponseMessage;
              alert('' + responseMessage.message);
              console.log('Filtro lista fallito');
              // Sblocco dell'observable con KO
              observer.next(error as ResponseMessage);
              observer.complete();

            }
          );

      }
    );

    return succ;
  }

  deleteBooking(bookingId: number) {
    const url = this.buildRemoteRestUrl('bookings/delete/' + bookingId);
    console.log(url);
    return this.http.get(url);
  }


  createBookings(username: string, name: string, surname: string, transportViewBean: Transport, dateFrom: Date, dateTo: Date, price: number, seats: number) {
    let newBooking: Booking;
    newBooking = new Booking();
    const succ = new Observable<boolean>(
      (observer) => {
        const url = this.buildRemoteRestUrl('bookings/create');
        newBooking.username = username;
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
              alert('' + (response as ResponseMessage).message );
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
    const url = this.buildRemoteRestUrl('bookings/details/' + id);
    return this.http.get(url);
  }

  getAvailableTransports(vehicle: string, dateFrom: Date, dateTo: Date, numPosti: number) {
    let transport: Transport;
    transport = new Transport();
    const succ = new Observable<ResponseMessage>(
      (observer) => {
        const url = this.buildRemoteRestUrl('transport/findAvailableTransport');
        transport.dateFrom = dateFrom;
        transport.dateTo = dateTo;
        transport.vehicle = vehicle;
        transport.numPosti = numPosti;
        this.http.post(url, transport).subscribe(
          response => {
            if (this.validation(response as ResponseMessage)) {
              //sessionuser = (response[0] as User); // sessionuser = (<User>response[0]);
              console.log('ricerca completata');
              // salvataggio dell'utente loggato
              // sblocco l'observable con OK
              observer.next(response as ResponseMessage);
              observer.complete();
            } else {
              alert('' + (response as ResponseMessage).message);
              console.log('ricerca fallita');
              // Sblocco dell'observable con KO
              observer.next(response as ResponseMessage);
              observer.complete();
            }
          },
          error => {
            let responseMessage: ResponseMessage;
            responseMessage = error as ResponseMessage;
            alert('' + responseMessage.message);
          console.log('ricerca fallita');
          // Sblocco dell'observable con KO
          observer.next(error as ResponseMessage);
          observer.complete();

          }
        );
      }
    );
    return succ;
  }
  getVehicleTypes() {
    const url = this.buildRemoteRestUrl('vehicles/listall');
    return this.http.get(url);
  }
}
