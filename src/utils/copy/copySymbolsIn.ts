import copyObject from "./copyObject";
import { getSymbolsIn } from "../../internal/keys";

function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(object), object);
}

export default copySymbolsIn;
