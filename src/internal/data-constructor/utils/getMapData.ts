import isKeyAble from "./isKeyAble";
import MapCache from "../mapCache";
import Hash from "../hash";

function getMapData(map: MapCache, key): Hash | Map<any, any> {
  const data = map.getData();
  return isKeyAble(key)
    ? data[typeof key === "string" ? "string" : "hash"]
    : data.map;
}
export default getMapData;
