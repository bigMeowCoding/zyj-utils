import { toInteger } from "./toInteger";

test("base", () => {
  expect(toInteger(1.2)).toBe(1);
  expect(toInteger(Number.NEGATIVE_INFINITY)).toBe(-1 * Number.MAX_VALUE);
});
