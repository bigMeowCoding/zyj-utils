/**
 *
 * @description forEach pollfill
 *
 */
function arrayEach<T>(array: T[], iteratee): T[] {
    let index = -1;
    const len = array.length;
    while (++index < len) {
        iteratee(array[index], index, array);
    }
    return array;
}

export default arrayEach;
