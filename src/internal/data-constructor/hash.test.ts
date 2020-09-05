import Hash from "./hash";
import {ListCacheItem} from "../interface/data-constructor";

test("base", () => {
  const arr: ListCacheItem[] = [
    ["key1", { value: "value1" }],
    ["key2", { value: "value2" }],
  ];
  const hash = new Hash(arr);
  expect(hash.has("key1")).toBeTruthy();
  expect(hash.has("key3")).toBeFalsy();
  expect(hash.has(undefined)).toBeFalsy();
});

test("undefined", () => {
  const hash = new Hash([]);

  hash.set("key1", undefined);
  expect(hash.has("key1")).toBeTruthy();
});

test("size", () => {
  const hash = new Hash([]);
  hash.set("key", "value");
  expect(hash.len()).toBe(1);
  expect(hash.delete("key")).toBeTruthy();
  expect(hash.len()).toBe(0);
  expect(hash.delete("key")).toBeFalsy();
  expect(hash.len()).toBe(0);
});
