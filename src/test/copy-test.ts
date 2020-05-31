import clone from "../utils/copy/clone";
import deepClone from "../utils/copy/deepClone";
import isProto from "../internal/isProto";
import assignValue from "../internal/assignValue";
const arr = [1,3,2];
// const copyArr = clone(arr);

// console.log(arr, copyArr, copyArr === arr);
// console.log(isProto(Object.prototype));

// console.log(isProto(Object.getPrototypeOf({})));
const obj = {a:'value'};
const a = 1;
assignValue(obj,'a',a); // {a:value}
console.log(obj, 1/obj.a);
