import ListCache, { ListCacheItem } from "./listCache";

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
  expect(list.get("key1").value).toBe("value1");
  expect(list.has("key2")).toBeFalsy();
  list.set("key2", {
    value: "value2",
  });
  expect(list.get("key2").value).toBe("value2");
  expect(list.get("key3")).toBeUndefined();
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
  list.delete("key1");
  expect(list.has("key1")).toBeFalsy();
  expect(list.has("key2")).toBeTruthy();
  expect(list.delete("key3")).toBeFalsy();
});
