/**
 * @description 比较两个参数是否严格相等
 * 校验两个参数是NaN情况,两个参数都是NaN判断为相等
 */
function eq(value, other): boolean {
    return value === other || (value !== value && other !== other);
}

export default eq;
