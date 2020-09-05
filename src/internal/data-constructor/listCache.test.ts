import ListCache from "./listCache";
import { ListCacheItem } from "../interface/data-constructor";

test("测试构造方法", () => {
  const arr: ListCacheItem[] = [
    ["key1", { value: "value1" }],
    ["key2", { value: "value2" }],
  ];
  const list = new ListCache(arr);
  expect(list.get("key1").value).toBe("value1");
  expect(list.get("key2").value).toBe("value2");
  expect(list.get("key3")).toBeUndefined();
});

test("测试set方法", () => {
  const arr: ListCacheItem[] = [];
  const list = new ListCache(arr);
  list.set("key1", {
    value: "value1",
  });
  expect(list.len()).toBe(1);
  expect(list.get("key1").value).toBe("value1");
  expect(list.has("key2")).toBeFalsy();
  list.set("key2", {
    value: "value2",
  });
  expect(list.get("key2").value).toBe("value2");
  expect(list.get("key3")).toBeUndefined();
  expect(list.len()).toBe(2);
  list.set(true, "boolean");
  expect(list.has(true)).toBeTruthy();

  expect(list.get(true)).toBe("boolean");
  expect(list.delete(true)).toBeTruthy();
  expect(list.has(true)).toBeFalsy();
});

test("测试has方法", () => {
  const arr: ListCacheItem[] = [
    ["key1", { value: "value1" }],
    ["key2", { value: "value2" }],
  ];
  const list = new ListCache(arr);
  expect(list.has("key1")).toBeTruthy();
  expect(list.has("key3")).toBeFalsy();
});

test("测试delete方法", () => {
  const arr: ListCacheItem[] = [
    ["key1", { value: "value1" }],
    ["key2", { value: "value2" }],
  ];
  const list = new ListCache(arr);
  expect(list.has("key1")).toBeTruthy();
  expect(list.len()).toBe(2);
  list.delete("key1");
  expect(list.has("key1")).toBeFalsy();
  expect(list.has("key2")).toBeTruthy();
  expect(list.delete("key3")).toBeFalsy();
  expect(list.len()).toBe(2);
});
