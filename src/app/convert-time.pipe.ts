import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (!value) {
      return 0;
    }
    const secondsAndCentiseconds = (value / 100) % 60;
    return secondsAndCentiseconds.toString().padStart(2, '0'); // doesn't add padding
  }


  /*     switch (true) {
        case (value === 100):
          return value * 1.60934;
        case 'm':
          return value * 1.60934 * 1000;
        case 'cm':
          return value * 1.60934 * 1000 * 1000;
        default:
          throw new Error('Target unit not supported.')
      } */
}

