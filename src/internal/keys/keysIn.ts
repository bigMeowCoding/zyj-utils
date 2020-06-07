/**
 *
 * @description 获取对象自身和继承的可枚举属性不包含symbol
 */
function keysIn(object): string[] {
    const result = [];
    for (const key of Object.keys(object)) {
        result.push(key);
    }
    return result;
}

export default keysIn;
