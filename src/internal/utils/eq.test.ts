import {eq} from "./eq";

test("比较两个对象", () => {
  const o1 = { a: 1 },
    o2 = { a: 1 };
  expect(eq(o1, o2)).toBeFalsy();
  expect(eq(o1, o1)).toBeTruthy();
});

test("比较对象与值", () => {
  const str = "s",
      // tslint:disable-next-line:no-construct
    strObject = new String(str);
  expect(eq(strObject, str)).toBeFalsy();
});
test("比较两个对象", () => {
  const o1 = { a: 1 },
    o2 = { a: 1 };
  expect(eq(o1, o2)).toBeFalsy();
  expect(eq(o1, o1)).toBeTruthy();
});

test("比较对象与值", () => {
  const str = "s",
      // tslint:disable-next-line:no-construct
    strObject = new String(str);
  expect(eq(strObject, str)).toBeFalsy();
});

test("比较NaN", () => {
  const a1 = NaN,
    a2 = NaN;
  expect(eq(a1, a2)).toBeTruthy();
});
