export class Utils {
  public static getRandom(high: number, low: number = 0) {
    const range = high - low + 1;
    const r = Math.floor(range * Math.random() + .5);
    return Math.min(low + r, high);
  };

}

export class Timer {
  counter: number;
  timer: number;
  start: number;
  /* static startTimer: any; */
  constructor(start: number, counter: number, timer: number) {
    this.counter = counter;
    this.timer = timer;
    this.start = start;
  }

  startTimer() {
    const count = setInterval(() => {
      const timePassed = Math.round((Date.now() - this.start));
      console.log(timePassed)
      this.timer = timePassed;

      if (timePassed >= 5000) {
        clearInterval(count);
      }
    }, 1)
    return this.timer;

  }
}
