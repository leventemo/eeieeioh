export class Utils {
  public static getRandom(high: number, low: number = 0) {
    const range = high - low + 1;
    const r = Math.floor(range * Math.random() + .5);
    return Math.min(low + r, high);
  };

  public static shuffle(array: string[][]) {
    let currentIndex = array.length;
    let randomIndex: number;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

}
