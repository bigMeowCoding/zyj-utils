import { toNumber } from "./toNumber";

test("base", () => {
  expect(toNumber(Infinity)).toBeTruthy();
  expect(toNumber(true)).toBe(1);
  expect(toNumber(NaN)).toBe(NaN);
});

test("decimal", () => {
  expect(toNumber("0b10")).toBe(2);
  expect(toNumber("0xa")).toBe(10);
  expect(toNumber("0o10")).toBe(8);
});
test("object", () => {
  const obj1 = {
    valueOf: function () {
      return 2;
    },
  };
  const obj2 = {
    toString: function () {
      return "0b10";
    },
  };
  expect(toNumber(obj1)).toBe(2);
  expect(toNumber(obj2)).toBe(2);
});
