function arrayEach<T>(array: T[], iterator: Function): T[] {
    let index = -1;
    const length = array.length;

    while (++index < length) {
        if (iterator(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}

export default arrayEach;
