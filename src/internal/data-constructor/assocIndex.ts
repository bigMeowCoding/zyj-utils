import eq from "../eq";
import { MapCacheKey } from "../interface/data-constructor";

export function assocIndex(array: any[], key: MapCacheKey): number {
  if (!Array.isArray(array)) {
    return -1;
  }
  let len = array.length - 1;
  while (len >= 0) {
    if (eq(array[len][0], key)) {
      return len;
    }
    len--;
  }
  return -1;
}
