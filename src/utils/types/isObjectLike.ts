/**
 * @description 判断value typeof 为object且不是null
 */
function isObjectLike(value): boolean {
    return typeof value === 'object' && value !== null;
}

export default isObjectLike;
