"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/app/[posts]";
exports.ids = ["pages/app/[posts]"];
exports.modules = {

/***/ "./pages/app/[posts].js":
/*!******************************!*\
  !*** ./pages/app/[posts].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostId),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getStaticPaths = async ()=>{\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n    const data = await res.json();\n    const paths = data.map((post)=>({\n            params: {\n                posts: post.id.toString()\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    console.log(id);\n    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);\n    const data = await res.json();\n    return {\n        props: {\n            post: data\n        }\n    };\n};\nfunction PostId({ post  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: post.id\n    }, void 0, false, {\n        fileName: \"C:\\\\testing area\\\\next-marging-test-route\\\\testing next\\\\react-first\\\\pages\\\\app\\\\[posts].js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcHAvW3Bvc3RzXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFbEIsTUFBTUMsaUJBQWlCLFVBQVc7SUFDckMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO0lBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUUzQixNQUFNQyxRQUFRRixLQUFLRyxHQUFHLENBQUNDLENBQUFBLE9BQVM7WUFFeEJDLFFBQVM7Z0JBQUVDLE9BQU9GLEtBQUtHLEVBQUUsQ0FBQ0MsUUFBUTtZQUFHO1FBQ2pEO0lBRUksT0FBTztRQUNITjtRQUNBTyxVQUFVLEtBQUs7SUFDbkI7QUFDSixFQUFDO0FBRU0sTUFBTUMsaUJBQWlCLE9BQU9DLFVBQVc7SUFDNUMsTUFBTUosS0FBS0ksUUFBUU4sTUFBTSxDQUFDRSxFQUFFO0lBQzVCSyxRQUFRQyxHQUFHLENBQUNOO0lBQ1osTUFBTVQsTUFBTSxNQUFNQyxNQUFNLENBQUMsMkNBQTJDLEVBQUVRLEdBQUcsQ0FBQztJQUMxRSxNQUFNUCxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFFM0IsT0FBTztRQUNIYSxPQUFPO1lBQUNWLE1BQU9KO1FBQUs7SUFDeEI7QUFDSixFQUFDO0FBR2MsU0FBU2UsT0FBTyxFQUFDWCxLQUFJLEVBQUMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ1k7a0JBQUtaLEtBQUtHLEVBQUU7Ozs7OztBQUVqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZmlyc3QvLi9wYWdlcy9hcHAvW3Bvc3RzXS5qcz82ZWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+e1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKHBvc3QgPT4gKHtcclxuXHJcbiAgICAgICAgICAgIHBhcmFtcyA6IHsgcG9zdHM6IHBvc3QuaWQudG9TdHJpbmcoKSB9XHJcbn0pKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT57XHJcbiAgICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4gICAgY29uc29sZS5sb2coaWQpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7aWR9YCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7cG9zdCA6IGRhdGEgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdElkKHtwb3N0fSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2Pntwb3N0LmlkfTwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBhdGhzIiwibWFwIiwicG9zdCIsInBhcmFtcyIsInBvc3RzIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiUG9zdElkIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/app/[posts].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/app/[posts].js"));
module.exports = __webpack_exports__;

})();