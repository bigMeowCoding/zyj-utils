import Hash from "../data-constructor/hash";

export interface MapCacheData {
  hash: Hash;
  map: Map<any, any>;
  string: Hash;
}

export type MapCacheListItem = [MapCacheKey, any];

export type MapCacheKey = string | number | boolean | Symbol;
