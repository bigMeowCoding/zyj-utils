import isObjectLike from "./isObjectLike";
import getTag from "../../internal/getTag";
import {ARGUMENTS_TAG} from "./tags";


/**
 *
 * @description 判断参数是否是js内置的函数参数类型
 */
function isArguments(value): boolean {
    return isObjectLike(value) && getTag(value) === ARGUMENTS_TAG;
}

export default isArguments;
