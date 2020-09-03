import Hash from "./hash";
import getMapData from "./utils/getMapData";
import {
  MapCacheData,
  MapCacheKey,
  MapCacheListItem,
} from "../interface/data-constructor";

class MapCache {
  private __data__: MapCacheData = null;
  private size = 0;

  constructor(entries: MapCacheListItem[]) {
    this.clear();
    for (const entry of entries) {
      this.set(entry[0], entry[1]);
    }
  }

  public get(key: MapCacheKey) {
    return getMapData(this, key).get(key as any);
  }

  public has(key: MapCacheKey): boolean {
    return getMapData(this, key).has(key as any);
  }

  public set(key: MapCacheKey, value) {
    const data = getMapData(this, key);
    this.size += data.has(key as any) ? 0 : 1;
    data.set(key as any, value);
    return this;
  }

  getData(): MapCacheData {
    return this.__data__;
  }

  public delete(key: MapCacheKey): boolean {
    const result = getMapData(this, key)["delete"](key as any);
    if (result) {
      this.size--;
    }
    return result;
  }

  private clear() {
    this.__data__ = {
      hash: new Hash([]),
      string: new Hash([]),
      map: new Map<any, any>(),
    };
    this.size = 0;
  }

  public len(): number {
    return this.size;
  }
}

export default MapCache;
