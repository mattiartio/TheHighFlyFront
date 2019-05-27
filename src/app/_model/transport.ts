export class Transport {

  idTransport: number;
  price: number;
  maxSeats: number;
  vehicle: string;
  dateFrom: Date;
  dateTo: Date;
  numPosti: number;

  constructor(idTransport: number, price: number, maxSeats: number, vehicle: string, dateFrom: Date, dateTo: Date, numPosti: number) {
    this.idTransport = idTransport;
    this.price = price;
    this.maxSeats = maxSeats;
    this.vehicle = vehicle;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.numPosti = numPosti;
  }
}
