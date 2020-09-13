/**
 *
 * @description 为clone对象作准备
 */
import isProto from "./isProto";

function initCloneObject(object) {
    return (typeof object.constructor === 'function' && !isProto(object)) ? Object.create(Object.getPrototypeOf(object)) : {};
}

export default initCloneObject;
