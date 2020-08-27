import { assocIndex } from "./assocIndex";

test("测试有对应key", () => {
  const arr = [["key1"], ["key2"]];
  expect(assocIndex(arr, "key1")).toBe(0);
    expect(assocIndex(arr, "key2")).toBe(1);
});
test("测试没有有对应key", () => {
    const arr = [["key1"], ["key2"]];
    expect(assocIndex(arr, "key3")).toBe(-1);
});

test("测试数组为空", () => {
    const arr = [];
    expect(assocIndex(arr, "key3")).toBe(-1);
});
test("测试参数不为数组", () => {
    const arr = -1;
    // @ts-ignore
    expect(assocIndex(arr, "key3")).toBe(-1);
});
