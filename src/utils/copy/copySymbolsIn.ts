import copyObject from "./copyObject";


function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(object), object);
}

export default copySymbolsIn;
