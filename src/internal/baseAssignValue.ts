/**
 *
 *@description 基本的赋值不作校验
 */
function baseAssignValue(object, key, value) {
    if (key === '__proto__') {
        Object.defineProperty(object, key, {
            configurable: true,
            writable: true,
            enumerable: true,
            value,
        });
    } else {
        object[key] = value;
    }
}

export default baseAssignValue;
