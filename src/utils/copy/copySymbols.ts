import copyObject from "./copyObject";

function copySymbols(source, object) {
    return copyObject(source, getSymbols(object), object);
}

export default copySymbols;
