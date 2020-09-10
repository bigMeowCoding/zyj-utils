import copyObject from "./copyObject";
import {getSymbols} from "../../internal/keys";

function copySymbols(source, object) {
    return copyObject(source, getSymbols(object), object);
}

export default copySymbols;
