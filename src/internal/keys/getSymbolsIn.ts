/**
 *
 * @description 递归获取对象身上所有symbol
 */
import { getSymbols } from "./getSymbols";

export function getSymbolsIn(object): Symbol[] {
  const result = [];
  object = Object(object);
  while (object) {
    result.push(...getSymbols(object));
    object = Object.getPrototypeOf(object);
  }
  return result;
}
