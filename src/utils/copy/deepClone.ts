import baseClone from "../../internal/object/baseClone";
import {CopyType} from "../config/copyType";

export function deepClone(value) {
    return baseClone(value, CopyType.CLONE_DEEP_FLAG | CopyType.CLONE_SYMBOLS_FLAG);
}

