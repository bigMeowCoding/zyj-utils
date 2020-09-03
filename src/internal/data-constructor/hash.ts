import { ListCacheItem } from "./listCache";
const HASH_UNDEFINED = "__lodash_hash_undefined__";

class Hash {
  private __data__ = null;
  public size = 0;
  constructor(entries: ListCacheItem[]) {
    this.clear();
    for (const item of entries) {
      this.set(item[0], item[1]);
    }
  }

  public set(key: string, value) {
    const data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = value === undefined ? HASH_UNDEFINED : value;
    return this;
  }
  public get(key: string) {
    const data = this.__data__;
    return data[key] === HASH_UNDEFINED ? undefined : data[key];
  }

  public delete(key: string): boolean {
    if (this.has(key)) {
      const result = delete this.__data__[key];
      if (result) {
        this.size--;
      }
      return result;
    } else {
      return false;
    }
  }

  public has(key: string): boolean {
    const data = this.__data__;
    return data[key] !== undefined;
  }

  private clear() {
    this.__data__ = Object.create(null);
    this.size = 0;
  }

  public len(): number {
    return this.size;
  }
}

export default Hash;
