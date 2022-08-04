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
}

