import isKeyAble from "./isKeyAble";

test("是否可以作为key", () => {
  expect(isKeyAble("")).toBeTruthy();
  expect(isKeyAble("ss")).toBeTruthy();
  expect(isKeyAble(1)).toBeTruthy();
  expect(isKeyAble(true)).toBeTruthy();
  expect(isKeyAble("__proto__")).toBeFalsy();
  expect(isKeyAble(null)).toBeTruthy();
  expect(isKeyAble({})).toBeFalsy();
  expect(isKeyAble(Object.create({}))).toBeFalsy();
});
