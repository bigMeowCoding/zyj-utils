/**
 *
 * @description object或者function就认为是对象（js标准就是这样）
 */
export function isObject(value): boolean {
    return value != null && (typeof value === 'object' || typeof value === 'function');
}

