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
exports.id = "pages/app/[postId]";
exports.ids = ["pages/app/[postId]"];
exports.modules = {

/***/ "./pages/app/[postId].js":
/*!*******************************!*\
  !*** ./pages/app/[postId].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostId),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getStaticPaths = async ()=>{\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n    const data = await res.json();\n    const paths = data.map((post)=>({\n            params: {\n                postId: post.id.toString()\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async (context)=>{\n    const id = context.params.postId;\n    console.log(\"id\", id);\n    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);\n    const data = await res.json();\n    return {\n        props: {\n            post: data\n        }\n    };\n    console.log(data.id);\n};\nfunction PostId({ post  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: post.title\n    }, void 0, false, {\n        fileName: \"C:\\\\testing area\\\\next-marging-test-route\\\\testing next\\\\react-first\\\\pages\\\\app\\\\[postId].js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcHAvW3Bvc3RJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBRWxCLE1BQU1DLGlCQUFpQixVQUFXO0lBQ3JDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtJQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFFM0IsTUFBTUMsUUFBUUYsS0FBS0csR0FBRyxDQUFDQyxDQUFBQSxPQUFTO1lBRXhCQyxRQUFTO2dCQUFFQyxRQUFRRixLQUFLRyxFQUFFLENBQUNDLFFBQVE7WUFBRztRQUNsRDtJQUVJLE9BQU87UUFDSE47UUFDQU8sVUFBVSxLQUFLO0lBQ25CO0FBQ0osRUFBQztBQUVNLE1BQU1DLGlCQUFpQixPQUFPQyxVQUFXO0lBQzVDLE1BQU1KLEtBQUtJLFFBQVFOLE1BQU0sQ0FBQ0MsTUFBTTtJQUNoQ00sUUFBUUMsR0FBRyxDQUFDLE1BQU1OO0lBQ2xCLE1BQU1ULE1BQU0sTUFBTUMsTUFBTSxDQUFDLDJDQUEyQyxFQUFFUSxHQUFHLENBQUM7SUFDMUUsTUFBTVAsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBRTNCLE9BQU87UUFDSGEsT0FBTztZQUFDVixNQUFPSjtRQUFLO0lBQ3hCO0lBQ0FZLFFBQVFDLEdBQUcsQ0FBQ2IsS0FBS08sRUFBRTtBQUN2QixFQUFDO0FBR2MsU0FBU1EsT0FBTyxFQUFDWCxLQUFJLEVBQUMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ1k7a0JBQUtaLEtBQUthLEtBQUs7Ozs7OztBQUVwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZmlyc3QvLi9wYWdlcy9hcHAvW3Bvc3RJZF0uanM/NzRjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PntcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChwb3N0ID0+ICh7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMgOiB7IHBvc3RJZDogcG9zdC5pZC50b1N0cmluZygpIH1cclxufSkpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcclxuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMucG9zdElkO1xyXG4gICAgY29uc29sZS5sb2coXCJpZFwiLCBpZClcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtpZH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtwb3N0IDogZGF0YSB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmlkKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdElkKHtwb3N0fSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2Pntwb3N0LnRpdGxlfTwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBhdGhzIiwibWFwIiwicG9zdCIsInBhcmFtcyIsInBvc3RJZCIsImlkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIlBvc3RJZCIsImRpdiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/app/[postId].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/app/[postId].js"));
module.exports = __webpack_exports__;

})();