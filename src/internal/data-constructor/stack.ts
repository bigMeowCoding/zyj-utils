import ListCache from "./listCache";
import MapCache from "./mapCache";
import { ListCacheItem } from "../interface/data-constructor";

class Stack {
  private __data__: ListCache | MapCache = null;
  private size = 0;
  private LARGE_ARRAY_SIZE = 200;

  constructor(entries: ListCacheItem[]) {
    this.__data__ = new ListCache(entries);
    this.size = this.__data__.len();
  }
  public get(key: string) {
    return this.__data__.get(key);
  }
  public setMaxArrayNumber(size: number) {
    this.LARGE_ARRAY_SIZE = size;
  }
  public getData(): ListCache | MapCache {
    return this.__data__;
  }
  public has(key: string) {
    return this.__data__.has(key);
  }
  public clear() {
    this.__data__ = new ListCache([]);
    this.size = 0;
  }
  public delete(key: string): boolean {
    const result = this.__data__.delete(key);
    this.size -= result ? 1 : 0;
    return result;
  }
  public set(key: string, value) {
    let data = this.__data__;
    if (data instanceof ListCache) {
      const pairs = data.getData();
      if (data.len() < this.LARGE_ARRAY_SIZE) {
        data.set(key, value);
        this.size = data.len();
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.len();
    return this;
  }
  public len(): number {
    return this.size;
  }
}

export default Stack;
