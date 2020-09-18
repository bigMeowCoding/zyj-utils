export function getRepeatItems<T>(array: T[]): T[] {
  if (!array.length) {
    return [];
  }
  const copy = array.slice(0),
    repeat: T[] = [];
  copy.sort();
  let item = copy[0];
  for (let i = 1; i < copy.length; i++) {
    if (copy[i] === item) {
      repeat.push(item);
      while(copy[i+1] === item) {
          i++;
      }
    } else {
      item = copy[i];
    }
  }

  return repeat;
}
