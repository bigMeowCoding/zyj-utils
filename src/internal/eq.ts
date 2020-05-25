/**
 * @description 比较两个参数是否严格相等
 * 校验两个参数是NaN情况
 */
function eq(value, other): boolean {
    return value === other || (value !== value && other !== other);
}

export default eq;
