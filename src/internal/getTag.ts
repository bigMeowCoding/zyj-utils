/**
 * @description 获取value执行toString方法的返回值
 * lodash 对null和undefined单独拿出来显式给出返回，不知道什么原因可能式兼容性处理
 */
function getTag(value): string {
    // 使用Object的tostring方法，用String的tostring方法只能绑定this对象给string
    return Object.prototype.toString.call(value);
}

export default getTag;
