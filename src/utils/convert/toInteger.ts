import { toFinite } from "./toFinite";

export function toInteger(value): number {
  const result = toFinite(value),
    reminder = result % 1;
  return reminder ? result - reminder : result;
}
