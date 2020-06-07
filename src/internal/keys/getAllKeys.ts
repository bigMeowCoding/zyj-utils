/**
 * @description 获取对象自身枚举属性，包含symbol
 */
function getAllKeys(object): (string | Symbol)[] {
    const result = [];
    result.push(...Object.keys(object));
    if (!Array.isArray(object)) {
        result.push(...getSymbols(object));
    }
    return result;
}

export default getAllKeys;
