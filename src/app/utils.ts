export class Utils {
  public static getRandom(high: number, low: number = 0) {
    const range = high - low + 1;
    const r = Math.floor(range * Math.random() + .5);
    return Math.min(low + r, high);
  };

}

export class Timer {
  constructor() { }


  /*   counter: number;
    timer: number;
    start: number;
    interval: number; */
  /* static startTimer: any; */
  /* constructor(start: number, counter: number, timer: number) {
    this.counter = counter;
    this.timer = timer;
    this.start = start;
    this.interval = 0;
  } */

  /* startTimer() {
    this.interval = setInterval(() => {
      const timePassed = Math.round((Date.now() - this.start));
      this.timer = timePassed;

      if (timePassed >= 1000) {
        clearInterval(this.interval);
        console.log(this.timer);
      }
    }, 1) as unknown as number;
    return this.timer;
  }

  stopTimer() {
    clearInterval(this.interval);
    console.log(this.timer);
  } */
}
