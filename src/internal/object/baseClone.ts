import { CopyType } from "../../utils/config/copyType";
import isObject from "../../utils/types/isObject";
import copyArray from "../../utils/copy/copyArray";
import getAllKeysIn from "../keys/getAllKeysIn";
import getAllKeys from "../keys/getAllKeys";
import { ARGUMENTS_TAG, OBJECT_TAG } from "../../utils/config/tags";
import initCloneObject from "./initCloneObject";
import copySymbolsIn from "../../utils/copy/copySymbolsIn";
import copyObject from "../../utils/copy/copyObject";
import keysIn from "../keys/keysIn";
import copySymbols from "../../utils/copy/copySymbols";
import { arrayEach } from "../../utils/each";
import { keys } from "../keys";
import assignValue from "./assignValue";
import { Stack } from "../data-constructor/stack";
import { getTag } from "../utils";

/**
 * @private
 * @description 复制数组的初始化操作, reg匹配结果也是一个类数组类型
 * @description 结果是[value*3]这种类型
 */
function initCloneArray<T>(array: T[] | RegExpExecArray): T[] {
  const { length } = array;
  const result = new Array(length);
  if (
    length &&
    typeof array[0] === "string" &&
    Object.prototype.hasOwnProperty.call(array, "index")
  ) {
    (result as RegExpExecArray).index = (array as RegExpExecArray).index;
    (result as RegExpExecArray).input = (array as RegExpExecArray).input;
  }
  return result;
}

/**
 *
 * @description clone 基础方法
 * @param bitmask clone 类型配置
 * @param key value 键值
 * @param object value 父对象
 * @param stack 解决环的方式
 */
function baseClone(
  value,
  bitmask: CopyType,
  key?: string,
  object?,
  stack?: Stack
) {
  let result = null;
  const isDeep = Boolean(bitmask & CopyType.CLONE_DEEP_FLAG);
  const isFlat = Boolean(bitmask & CopyType.CLONE_FLAT_FLAG);
  const isFull = Boolean(bitmask & CopyType.CLONE_SYMBOLS_FLAG);
  // 如果不是对象就直接返回
  if (!isObject(value)) {
    return value;
  }
  const isArr = Array.isArray(value),
    tag = getTag(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    const isFunc = typeof value === "function";
    if (tag === OBJECT_TAG || tag === ARGUMENTS_TAG || (isFunc && !object)) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, copyObject(value, keysIn(value), result))
          : copySymbols(value, Object.assign(result, value));
      }
    }
  }
  stack = stack || new Stack([]);
  if (stack.has(value)) {
    return stack.get(value);
  } else {
    stack.set(value, result);
  }
  const keysFunc = isFull
    ? isFlat
      ? getAllKeysIn
      : getAllKeys
    : isFlat
    ? keysIn
    : keys;

  const props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, (subValue, subKey) => {
    if (props) {
      subKey = subValue;
      subValue = value[subValue];
    }
    assignValue(
      result,
      subKey,
      baseClone(subValue, bitmask, subKey, subValue, stack)
    );
  });
  return result;
}

export default baseClone;
