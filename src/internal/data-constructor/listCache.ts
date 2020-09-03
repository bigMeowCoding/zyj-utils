import { assocIndex } from "./assocIndex";

export type ListCacheItem = [string, any];

/**
 * @description 数组对象，每个item是个键值数组
 *
 */
export default class ListCache {
  private __data__: ListCacheItem[] = [];
  private size = 0;
  constructor(entries: ListCacheItem[]) {
    this.clear();
    let len = entries.length ? entries.length : 0;
    while (len) {
      const entry = entries[len - 1];
      this.set(entry[0], entry[1]);
      len--;
    }
  }

  public set(key: string, value) {
    const data = this.__data__;
    const index = assocIndex(data, key);
    if (index >= 0) {
      data[index][1] = value;
    } else {
      data.push([key, value]);
      this.size++;
    }
    return this;
  }

  public get(key: string) {
    const data = this.__data__;
    const index = assocIndex(data, key);
    if (index >= 0) {
      return data[index][1];
    } else {
      return undefined;
    }
  }

  /**
   * @description 删除了key值返回true，其他返回false
   */
  public delete(key: string): boolean {
    const data = this.__data__;
    const index = assocIndex(data, key);
    if (index >= 0) {
      data.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  public has(key: string): boolean {
    return assocIndex(this.__data__, key) >= 0;
  }

  private clear() {
    this.__data__ = [];
    this.size = 0;
  }

  public len(): number {
    return this.size;
  }
}
