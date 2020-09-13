import baseClone from "./baseClone";
import { CopyType } from "../../utils/config/copyType";
import { keys } from "../keys";

test("浅拷贝", () => {
  const clone1 = baseClone({ a: 1 }, CopyType.CLONE_SYMBOLS_FLAG);
  const keysList = keys(clone1);
  expect(keysList.length).toBe(1);
  expect(clone1.a).toBe(1);
});

test("深拷贝", () => {
  const obj2 = {
    key: "inner",
  };
  const obj1 = {
    key: "outer",
    inner: obj2,
  };
  const clone2 = baseClone(obj1, CopyType.CLONE_SYMBOLS_FLAG);
  expect(clone2.key).toBe("outer");
  expect(clone2.inner).toBe(obj2);
  const clone = baseClone(obj1, CopyType.CLONE_DEEP_FLAG);
  expect(clone.key).toBe("outer");
  expect(clone.inner).not.toBe(obj2);
});

test("深拷贝环", () => {
  const obj2 = {
    key: "inner",
  };
  const obj1 = {
    key: "outer",
    inner: {
      key: "inner",
      inner: {
        key: "innerinner",
      },
    },
  };
  // @ts-ignore
  obj1.inner.inner.inner = obj1.inner;
  const clone = baseClone(obj1, CopyType.CLONE_DEEP_FLAG);
  expect(clone.key).toBe("outer");
  expect(clone.inner).not.toBe(obj2);
  expect(clone.inner.key).toBe("inner");

  const obj = {
    foo: {
      name: "foo",
      bar: {
        name: "bar",
        baz: {
          name: "baz",
          aChild: null, //待会让它指向obj.foo
        },
      },
    },
  };
  const cloneValue = baseClone(obj, CopyType.CLONE_DEEP_FLAG);
  expect(cloneValue.foo.bar.name).toBe("bar");
  expect(cloneValue.foo.bar.baz.name).toBe("baz");
  expect(cloneValue.foo.bar.baz.aChild).toBeNull();
});

test("拉平", () => {
  const obj2 = {
    key: "inner",
  };
  const obj1 = {
    key: "outer",
    inner: {
      key: "inner",
      inner: {
        key: "innerinner",
      },
    },
  };
  const obj = {
    foo: {
      name: "foo",
      bar: {
        name: "bar",
        baz: {
          name: "baz",
          aChild: null, //待会让它指向obj.foo
        },
      },
    },
  };
  Object.setPrototypeOf(obj, {
    proto: "proto",
  });
  const cloneValue = baseClone(
    obj,
    CopyType.CLONE_FLAT_FLAG | CopyType.CLONE_DEEP_FLAG
  );
  console.log(cloneValue);
  // expect(cloneValue.foo.bar.name).toBe("bar");
  // expect(cloneValue.foo.bar.baz.name).toBe("baz");
  // expect(cloneValue.foo.bar.baz.aChild).toBeNull();
});
