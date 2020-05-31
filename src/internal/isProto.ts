/**
 *
 * @description 判断value是不是proto-like对象
 * @description 判断逻辑为value有属性constructor且constructor的prototype值是否和value相等
 */
function isProto(value): boolean {
    const constructor = value.constructor;
    const proto = (typeof constructor === 'function' && constructor.prototype) || Object.prototype; // 占时不明白为什么要加Object.prototype在这
    return value === proto;
}

export default isProto;
