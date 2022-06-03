import nodeTypes from "../internal/nodeTypes";
import isObjectLike from "./isObjectLike";
import { getTag } from "../internal/getTag";
const nodeIsDate = nodeTypes && nodeTypes.isDate;

export default function isDate(val: any) {
  return nodeIsDate
    ? nodeIsDate(val)
    : isObjectLike(val) && getTag(val) === "[object Date]";
}
