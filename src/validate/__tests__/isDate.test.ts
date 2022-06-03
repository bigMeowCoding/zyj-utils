import isDate from "../isDate";

describe("isDate", () => {
  it("错误的值", () => {
    expect(isDate(1)).toBeFalsy();
    expect(isDate(null)).toBeFalsy();
    expect(isDate(undefined)).toBeFalsy();
  });

  it("日期值", () => {
    expect(isDate(new Date())).toBeTruthy();
    expect(isDate(new Date("1972-11-3"))).toBeTruthy();
  });
});
