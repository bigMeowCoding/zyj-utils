import { isObject, isSymbol } from "../types";
import {
  reIsBanHex,
  reIsBinary,
  reIsOctal,
  reTrim,
} from "../../internal/config/regex";

export function toNumber(value): number {
  const type = typeof value;
  if (type === "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NaN;
  }
  if (isObject(value)) {
    const temp = typeof value.valueOf === "function" ? value.valueOf() : value;
    value = isObject(temp) ? `${temp}` : temp;
  }
  if (typeof value !== "string") {
    return value === 0 ? value : +value;
  }
  value.replace(reTrim, "");
  const isBinary = reIsBinary.test(value),
    isOctal = reIsOctal.test(value);
  return (isBinary || isOctal)
    ? parseInt(value.slice(2), isBinary ? 2 : 8)
    : reIsBanHex.test(value)
    ? NaN
    : +value;
}
