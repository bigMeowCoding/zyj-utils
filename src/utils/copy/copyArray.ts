/**
 *
 * @description 浅复制数组
 *
 */
function copyArray(source: any[], array?: any[]): any[] {
    let index = -1;
    const {length} = source;
    if (!array) {
        array = new Array(length);
    }
    while (++index < length) {
        array[index] = source[index];
    }
    return array;
}

export default copyArray;
