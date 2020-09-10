import baseClone from "./baseClone";
import { CopyType } from "../utils/config/copyType";
import { keys } from "./keys";

test("浅拷贝", () => {
  const clone = baseClone({ a: 1 }, CopyType.CLONE_SYMBOLS_FLAG);
  const keysList = keys(clone);
  expect(keysList.length).toBe(1);
  expect(clone.a).toBe(1);
});
