import {Transport} from './transport';

export class Booking {
  id: number;
  username: string;
  name: string;
  surname: string;
  transportViewBean: Transport;
  dataFrom: Date;
  dataTo: Date;
  price: number;
  seats: number;

  constructor() {

  }
}
