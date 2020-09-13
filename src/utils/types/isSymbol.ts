import { getTag } from "../../internal/utils";
import { SYMBOL_TAG } from "../config";
export function isSymbol(value): boolean {
  const type = typeof value;
  return (
    type === "symbol" ||
    (type === "object" && value != null && getTag(value) === SYMBOL_TAG)
  );
}
