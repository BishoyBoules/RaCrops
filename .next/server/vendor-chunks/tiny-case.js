/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tiny-case";
exports.ids = ["vendor-chunks/tiny-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/tiny-case/index.js":
/*!*****************************************!*\
  !*** ./node_modules/tiny-case/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("const reWords = /[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+|(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*/g\n\nconst words = (str) => str.match(reWords) || []\n\nconst upperFirst = (str) => str[0].toUpperCase() + str.slice(1)\n\nconst join = (str, d) => words(str).join(d).toLowerCase()\n\nconst camelCase = (str) =>\n  words(str).reduce(\n    (acc, next) =>\n      `${acc}${\n        !acc\n          ? next.toLowerCase()\n          : next[0].toUpperCase() + next.slice(1).toLowerCase()\n      }`,\n    '',\n  )\n\nconst pascalCase = (str) => upperFirst(camelCase(str))\n\nconst snakeCase = (str) => join(str, '_')\n\nconst kebabCase = (str) => join(str, '-')\n\nconst sentenceCase = (str) => upperFirst(join(str, ' '))\n\nconst titleCase = (str) => words(str).map(upperFirst).join(' ')\n\nmodule.exports = {\n  words,\n  upperFirst,\n  camelCase,\n  pascalCase,\n  snakeCase,\n  kebabCase,\n  sentenceCase,\n  titleCase,\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdGlueS1jYXNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLDhyREFBOHJELEVBQUUsMEtBQTBLLEVBQUU7O0FBRTUyRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JhY3JvcHMvLi9ub2RlX21vZHVsZXMvdGlueS1jYXNlL2luZGV4LmpzP2I0Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVXb3JkcyA9IC9bQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV0/W2EtelxceGRmLVxceGY2XFx4ZjgtXFx4ZmZdKyg/Olsn4oCZXSg/OmR8bGx8bXxyZXxzfHR8dmUpKT8oPz1bXFx4YWNcXHhiMVxceGQ3XFx4ZjdcXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHhiZlxcdTIwMDAtXFx1MjA2ZiBcXHRcXHgwYlxcZlxceGEwXFx1ZmVmZlxcblxcclxcdTIwMjhcXHUyMDI5XFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMF18W0EtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdfCQpfCg/OltBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXXxbXlxcdWQ4MDAtXFx1ZGZmZlxceGFjXFx4YjFcXHhkN1xceGY3XFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4YmZcXHUyMDAwLVxcdTIwNmYgXFx0XFx4MGJcXGZcXHhhMFxcdWZlZmZcXG5cXHJcXHUyMDI4XFx1MjAyOVxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXGQrXFx1MjcwMC1cXHUyN2JmYS16XFx4ZGYtXFx4ZjZcXHhmOC1cXHhmZkEtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdKSsoPzpbJ+KAmV0oPzpEfExMfE18UkV8U3xUfFZFKSk/KD89W1xceGFjXFx4YjFcXHhkN1xceGY3XFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4YmZcXHUyMDAwLVxcdTIwNmYgXFx0XFx4MGJcXGZcXHhhMFxcdWZlZmZcXG5cXHJcXHUyMDI4XFx1MjAyOVxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBdfFtBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXSg/OlthLXpcXHhkZi1cXHhmNlxceGY4LVxceGZmXXxbXlxcdWQ4MDAtXFx1ZGZmZlxceGFjXFx4YjFcXHhkN1xceGY3XFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4YmZcXHUyMDAwLVxcdTIwNmYgXFx0XFx4MGJcXGZcXHhhMFxcdWZlZmZcXG5cXHJcXHUyMDI4XFx1MjAyOVxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXGQrXFx1MjcwMC1cXHUyN2JmYS16XFx4ZGYtXFx4ZjZcXHhmOC1cXHhmZkEtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdKXwkKXxbQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV0/KD86W2EtelxceGRmLVxceGY2XFx4ZjgtXFx4ZmZdfFteXFx1ZDgwMC1cXHVkZmZmXFx4YWNcXHhiMVxceGQ3XFx4ZjdcXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHhiZlxcdTIwMDAtXFx1MjA2ZiBcXHRcXHgwYlxcZlxceGEwXFx1ZmVmZlxcblxcclxcdTIwMjhcXHUyMDI5XFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcZCtcXHUyNzAwLVxcdTI3YmZhLXpcXHhkZi1cXHhmNlxceGY4LVxceGZmQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV0pKyg/Olsn4oCZXSg/OmR8bGx8bXxyZXxzfHR8dmUpKT98W0EtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdKyg/Olsn4oCZXSg/OkR8TEx8TXxSRXxTfFR8VkUpKT98XFxkKig/OjFTVHwyTkR8M1JEfCg/IVsxMjNdKVxcZFRIKSg/PVxcYnxbYS16X10pfFxcZCooPzoxc3R8Mm5kfDNyZHwoPyFbMTIzXSlcXGR0aCkoPz1cXGJ8W0EtWl9dKXxcXGQrfCg/OltcXHUyNzAwLVxcdTI3YmZdfCg/OlxcdWQ4M2NbXFx1ZGRlNi1cXHVkZGZmXSl7Mn18W1xcdWQ4MDAtXFx1ZGJmZl1bXFx1ZGMwMC1cXHVkZmZmXSlbXFx1ZmUwZVxcdWZlMGZdPyg/OltcXHUwMzAwLVxcdTAzNmZcXHVmZTIwLVxcdWZlMmZcXHUyMGQwLVxcdTIwZmZdfFxcdWQ4M2NbXFx1ZGZmYi1cXHVkZmZmXSk/KD86XFx1MjAwZCg/OlteXFx1ZDgwMC1cXHVkZmZmXXwoPzpcXHVkODNjW1xcdWRkZTYtXFx1ZGRmZl0pezJ9fFtcXHVkODAwLVxcdWRiZmZdW1xcdWRjMDAtXFx1ZGZmZl0pW1xcdWZlMGVcXHVmZTBmXT8oPzpbXFx1MDMwMC1cXHUwMzZmXFx1ZmUyMC1cXHVmZTJmXFx1MjBkMC1cXHUyMGZmXXxcXHVkODNjW1xcdWRmZmItXFx1ZGZmZl0pPykqL2dcblxuY29uc3Qgd29yZHMgPSAoc3RyKSA9PiBzdHIubWF0Y2gocmVXb3JkcykgfHwgW11cblxuY29uc3QgdXBwZXJGaXJzdCA9IChzdHIpID0+IHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG5cbmNvbnN0IGpvaW4gPSAoc3RyLCBkKSA9PiB3b3JkcyhzdHIpLmpvaW4oZCkudG9Mb3dlckNhc2UoKVxuXG5jb25zdCBjYW1lbENhc2UgPSAoc3RyKSA9PlxuICB3b3JkcyhzdHIpLnJlZHVjZShcbiAgICAoYWNjLCBuZXh0KSA9PlxuICAgICAgYCR7YWNjfSR7XG4gICAgICAgICFhY2NcbiAgICAgICAgICA/IG5leHQudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIDogbmV4dFswXS50b1VwcGVyQ2FzZSgpICsgbmV4dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpXG4gICAgICB9YCxcbiAgICAnJyxcbiAgKVxuXG5jb25zdCBwYXNjYWxDYXNlID0gKHN0cikgPT4gdXBwZXJGaXJzdChjYW1lbENhc2Uoc3RyKSlcblxuY29uc3Qgc25ha2VDYXNlID0gKHN0cikgPT4gam9pbihzdHIsICdfJylcblxuY29uc3Qga2ViYWJDYXNlID0gKHN0cikgPT4gam9pbihzdHIsICctJylcblxuY29uc3Qgc2VudGVuY2VDYXNlID0gKHN0cikgPT4gdXBwZXJGaXJzdChqb2luKHN0ciwgJyAnKSlcblxuY29uc3QgdGl0bGVDYXNlID0gKHN0cikgPT4gd29yZHMoc3RyKS5tYXAodXBwZXJGaXJzdCkuam9pbignICcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB3b3JkcyxcbiAgdXBwZXJGaXJzdCxcbiAgY2FtZWxDYXNlLFxuICBwYXNjYWxDYXNlLFxuICBzbmFrZUNhc2UsXG4gIGtlYmFiQ2FzZSxcbiAgc2VudGVuY2VDYXNlLFxuICB0aXRsZUNhc2UsXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tiny-case/index.js\n");

/***/ })

};
;