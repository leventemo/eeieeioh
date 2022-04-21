export class Utils {
  public static getRandom(high: number, low: number = 0) {
    var range = high - low + 1;
    var r = Math.floor(range * Math.random() + .5);
    return Math.min(low + r, high);
  };
}
