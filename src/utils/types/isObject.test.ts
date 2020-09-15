import { isObject } from "./isObject";

test("base", () => {
  expect(isObject(null)).toBeFalsy();
  expect(isObject(() => {})).toBeTruthy();
  expect(isObject(3)).toBeFalsy();
});
