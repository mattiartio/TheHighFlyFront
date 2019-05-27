import {Transport} from './transport';

export class Booking {
  username: string;
  name: string;
  surname: string;
  transport: Transport;
  dataFrom: Date;
  dataTo: Date;
  price: number;
  seats: number;

  constructor(username: string, name: string, surname: string, transport: Transport, dataFrom: Date, dataTo: Date, price: number, seats: number) {
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.transport = transport;
    this.dataFrom = dataFrom;
    this.dataTo = dataTo;
    this.price = price;
    this.seats = seats;
  }
}
