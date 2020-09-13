import baseAssignValue from "./baseAssignValue";
import {eq} from "../utils";

const hasOwnProperty = Object.prototype.hasOwnProperty;

function assignValue(object, key, value) {
    const objValue = object[key];

    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
        (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
    }
}

export default assignValue;
