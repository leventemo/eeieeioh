import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: number): string {
    if (!value) {
      return `00.00`;
    }

    let secondsAndCentiseconds = (value / 100) % 60;

    if (secondsAndCentiseconds === 5) {
      const output = `0${secondsAndCentiseconds.toString()}.00`;
      return output;
    } else {
      const output = `0${secondsAndCentiseconds.toString()}`;
      return output;
    }

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

