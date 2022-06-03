import freeGlobal from "./freeGlobal";
const freeExports =
  typeof exports === "object" &&
  exports !== null &&
  !exports.nodeType &&
  exports;

const freeModule =
  freeExports &&
  typeof module === "object" &&
  module !== null &&
  !(module as any).nodeType &&
  module;
const moduleExport = freeModule && freeModule.exports === freeExports;

const freeProcess = moduleExport && (freeGlobal as any).process;

const nodeType = (() => {
  try {
    const typeHelper =
      freeModule && freeModule.require && freeModule.require("util").types;
    return typeHelper
      ? typeHelper
      : freeProcess &&
          (freeProcess as any).binding &&
          (freeProcess as any).binding("util");
  } catch (e) {
    return null;
  }
})();
export default nodeType;
