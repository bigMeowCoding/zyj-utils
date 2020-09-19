import { chunk } from "./chunk";

test("base", () => {
  const a1 = [1, 2, 3];
  expect(chunk(a1, 1)).toEqual([[1], [2], [3]]);
  expect(chunk(a1, 5)).toEqual([[1, 2, 3]]);
  expect(chunk(a1, 2)).toEqual([[1, 2], [3]]);
  const a2 = ["a", "b", "c", "d"];
  expect(chunk(a2, 2)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
  const a3 = ["a", "b", "c", "d"];
  expect(chunk(a3, 3)).toEqual([["a", "b", "c"], ["d"]]);
});
