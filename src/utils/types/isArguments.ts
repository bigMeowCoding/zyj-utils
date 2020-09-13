import isObjectLike from "./isObjectLike";
import {ARGUMENTS_TAG} from "../config/tags";
import {getTag} from "../../internal/utils";


/**
 *
 * @description 判断参数是否是js内置的函数参数类型
 */
export function isArguments(value): boolean {
    return isObjectLike(value) && getTag(value) === ARGUMENTS_TAG;
}

