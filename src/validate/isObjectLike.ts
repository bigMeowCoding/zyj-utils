/**
 * @description 判断value typeof 为object且不是null
 */
import isNull from "./isNull";

function isObjectLike(value: any): boolean {
  return typeof value === "object" && isNull(value);
}

export default isObjectLike;
