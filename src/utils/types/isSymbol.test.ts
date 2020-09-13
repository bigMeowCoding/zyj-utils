import { isSymbol } from "./isSymbol";

test("基本用法", () => {
  expect(isSymbol(1)).toBeFalsy();
  expect(isSymbol(Symbol.for("23"))).toBeTruthy();
  expect(isSymbol(Symbol.iterator)).toBeTruthy();
});
