import isObjectLike from "./isObjectLike";

test("isObjectLike object ", () => {
  expect(isObjectLike({})).toBeTruthy();
});


test("isObjectLike not object ", () => {
  expect(isObjectLike('ss')).toBeFalsy();
});
