import { toNumber } from "./toNumber";

export function toFinite(value): number {
  if (!value) {
    return value === 0 ? value : 0; // 可能有-0
  }
  value = toNumber(value);
  if (
    value === Number.POSITIVE_INFINITY ||
    value === Number.NEGATIVE_INFINITY
  ) {
    const sign = value < 0 ? -1 : 1;
    return sign * Number.MAX_VALUE;
  }
  return value === value ? value : 0;
}
