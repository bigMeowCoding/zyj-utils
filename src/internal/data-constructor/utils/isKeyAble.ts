function isKeyAble(value) {
  const type = typeof value;
  return type === "string" ||
    type === "symbol" ||
    type === "number" ||
    type === "boolean"
    ? value !== "__proto__"
    : value === null;
}

export default isKeyAble;
