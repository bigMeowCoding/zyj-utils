import baseClone from "../../internal/baseClone";
import {CopyType} from "../config/copyType";

function deepClone(value) {
    return baseClone(value, CopyType.CLONE_DEEP_FLAG | CopyType.CLONE_SYMBOLS_FLAG);
}

export default deepClone;
