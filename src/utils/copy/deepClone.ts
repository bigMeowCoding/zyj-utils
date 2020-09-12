import baseClone from "../../internal/baseClone";
import {CopyType} from "../config/copyType";

export function deepClone(value) {
    return baseClone(value, CopyType.CLONE_DEEP_FLAG | CopyType.CLONE_SYMBOLS_FLAG);
}

