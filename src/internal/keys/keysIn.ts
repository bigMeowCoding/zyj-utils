function keysIn(object) {
    const result = [];
    for (const key of Object.keys(object)) {
        result.push(key);
    }
    return result;
}

export default keysIn;
