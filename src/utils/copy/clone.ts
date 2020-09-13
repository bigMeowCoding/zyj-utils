import baseClone from "../../internal/object/baseClone";
import {CopyType} from "../config/copyType";

export function clone(value) {
    return baseClone(value, CopyType.CLONE_SYMBOLS_FLAG);
}

