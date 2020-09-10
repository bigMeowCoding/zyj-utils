import ListCache from "./listCache";
import MapCache from "./mapCache";
import { ListCacheItem } from "../interface/data-constructor";
import {Stack} from "./stack";

test("基本功能", () => {
  const arr: ListCacheItem[] = [
    ["key1", { value: "value1" }],
    ["key2", { value: "value2" }],
  ];
  const stack = new Stack(arr);
  expect(stack.has("key1")).toBeTruthy();
  expect(stack.has("key3")).toBeFalsy();
  expect(stack.get("key1").value).toBe("value1");
  expect(stack.len()).toBe(2);
  stack.set("key3", { value: "value3" });
  expect(stack.has("key3")).toBeTruthy();
  expect(stack.len()).toBe(3);
  expect(stack.delete("key3")).toBeTruthy();
  expect(stack.len()).toBe(2);
});

test("max size 功能", () => {
  const arr: ListCacheItem[] = [
    ["key1", { value: "value1" }],
    ["key2", { value: "value2" }],
  ];
  const stack = new Stack(arr);
  stack.setMaxArrayNumber(2);
  expect(stack.getData() instanceof ListCache).toBeTruthy();
  stack.set("key3", { value: "value3" });
  expect(stack.getData() instanceof MapCache).toBeTruthy();
});
