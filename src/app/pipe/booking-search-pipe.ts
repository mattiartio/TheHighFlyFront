import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BookingSearchPipe'
})
export class BookingSearchPipe implements PipeTransform {
  transform(values, args?): Array<any> {
    if (values) {
      return values.filter(booking => {
        if (booking) {
          const found = (booking.name.toLowerCase().includes(args.toLowerCase())
            || booking.surname.toLowerCase().includes(args.toLowerCase()));
          return found;
        } else {
          return false;
        }
      });
    } else {
      return [];
    }
  }
}

