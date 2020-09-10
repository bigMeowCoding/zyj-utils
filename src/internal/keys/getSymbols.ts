/**
 *
 * @description 获取对象身上的symbol属性,过滤不可枚举
 */
export function getSymbols(value):Symbol[] {
    if (value == null) {
        return [];
    }
    const object = Object(value);
    return Object.getOwnPropertySymbols(object).filter((symbol) => {
        return Object.prototype.propertyIsEnumerable.call(object, symbol);
    });
}
