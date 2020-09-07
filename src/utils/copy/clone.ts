import baseClone from "../../internal/baseClone";
import {CopyType} from "../config/copyType";

export function clone(value) {
    return baseClone(value, CopyType.CLONE_SYMBOLS_FLAG);
}

