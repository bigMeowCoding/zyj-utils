import { getRepeatItems } from "./getRepeatItems";

test("number", () => {
  expect(getRepeatItems([])).toEqual([]);
  expect(getRepeatItems([1, 1, 1, 1, 1, 1])).toEqual([1]);
  expect(getRepeatItems([1, 2, 2, 3])).toEqual([2]);
  expect(getRepeatItems([1, 2, 4, 4, 3, 3, 1, 5, 3])).toEqual([1, 3, 4]);
});

test("string", () => {
  expect(
    getRepeatItems([
      "zyj1001",
      "zyj1001",
      "zyj1001",
      "zyj1001",
      "zyj1001",
      "zyj1001",
    ])
  ).toEqual(["zyj1001"]);
  expect(getRepeatItems(["zyj1001", "zyj1001", "zyj1002", "zyj1003"])).toEqual([
      'zyj1001',
  ]);
  expect(
    getRepeatItems([
      "zyj1001",
      "zyj1002",
      "zyj1004",
      "zyj1004",
      "zyj1003",
      "zyj1003",
      "zyj1001",
      "zyj1005",
      "zyj1003",
    ])
  ).toEqual(["zyj1001", "zyj1003", 'zyj1004']);
});
