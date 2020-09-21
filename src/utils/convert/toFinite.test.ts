import { toInteger } from "./toInteger";
import { toFinite } from "./toFinite";

test("base ", () => {
  expect(toFinite("a")).toBe(0);
  expect(toFinite(Number.POSITIVE_INFINITY)).toBe(Number.MAX_VALUE);
  expect(toFinite(Number.NEGATIVE_INFINITY)).toBe(-Number.MAX_VALUE);
  expect(toFinite(2)).toBe(2);
});
