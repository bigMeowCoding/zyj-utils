import MapCache from "./mapCache";
import { MapCacheListItem } from "../interface/data-constructor";

test("has", () => {
  const arr: MapCacheListItem[] = [
    ["key1", { value: "value1" }],
    ["key2", { value: "value2" }],
    [Symbol.for("key1"), { value: "value2" }],
  ];
  const map = new MapCache(arr);
  expect(map.has("key1")).toBeTruthy();
  expect(map.has("key3")).toBeFalsy();
  expect(map.has(Symbol.for("key1"))).toBeTruthy();
});

test("undefined", () => {
  const map = new MapCache([]);
  map.set("key1", undefined);
  expect(map.has("key1")).toBeTruthy();
  expect(map.get("key1")).toBeUndefined();
});

test("get", () => {
  const map = new MapCache([]);
  map.set(Symbol.for("key"), { value: "symbol" });
  expect(map.get(Symbol.for("key")).value).toBe("symbol");
});

test("size", () => {
  const map = new MapCache([]);
  map.set("key", "value");
  map.set(Symbol.for("key"), "value");
  expect(map.len()).toBe(2);
  expect(map.delete("key")).toBeTruthy();
  expect(map.len()).toBe(1);
  expect(map.delete("key")).toBeFalsy();
  expect(map.len()).toBe(1);
  expect(map.delete(Symbol.for("key"))).toBeTruthy();
  expect(map.len()).toBe(0);
});
