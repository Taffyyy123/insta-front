"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/onePost/[postId]/page",{

/***/ "(app-pages-browser)/./src/app/posts/onePost/[postId]/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/posts/onePost/[postId]/page.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Page = (param)=>{\n    let { params } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { postId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.use)(params);\n    const getOnePost = async ()=>{\n        const token = localStorage.getItem(\"accessToken\");\n        const jsonData = await fetch(\"https://instagram-backend-e3eq.onrender.com/post/getOnePost/\".concat(postId), {\n            headers: {\n                Authorization: \"Bearer \".concat(token),\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const response = await jsonData.json();\n        setPost(response);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            getOnePost();\n        }\n    }[\"Page.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/onePost/[postId]/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Page, \"1p12V7cgnb2AeMSPc9DmKUXDXxs=\");\n_c = Page;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvb25lUG9zdC9bcG9zdElkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUQ7QUFFakQsTUFBTUcsT0FBTztRQUFDLEVBQUVDLE1BQU0sRUFBMkM7O0lBQy9ELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUE7SUFDaEMsTUFBTSxFQUFFSyxNQUFNLEVBQUUsR0FBR1AsMENBQUdBLENBQUNJO0lBRXZCLE1BQU1JLGFBQWE7UUFDakIsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBRW5DLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsK0RBQXNFLE9BQVBOLFNBQy9EO1lBQ0VPLFNBQVM7Z0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTk47Z0JBQ3pCLGdCQUFnQjtZQUNsQjtRQUNGO1FBRUYsTUFBTU8sV0FBVyxNQUFNSixTQUFTSyxJQUFJO1FBQ3BDWCxRQUFRVTtJQUNWO0lBQ0FmLGdEQUFTQTswQkFBQztZQUNSTztRQUNGO3lCQUFHLEVBQUU7SUFDTCxxQkFBTyw4REFBQ1U7Ozs7O0FBQ1Y7R0F2Qk1mO0tBQUFBO0FBd0JOLGlFQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvMjRIUDAwMTYvRGVza3RvcC9JRy93ZWIvc3JjL2FwcC9wb3N0cy9vbmVQb3N0L1twb3N0SWRdL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgcG9zdFR5cGUgfSBmcm9tIFwiQC9jdXN0b20tY29tcG9uZW50cy9Qb3N0Rm9vdGVyXCI7XG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGFnZSA9ICh7IHBhcmFtcyB9OiB7IHBhcmFtczogUHJvbWlzZTx7IHBvc3RJZDogc3RyaW5nIH0+IH0pID0+IHtcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGU8cG9zdFR5cGUgfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IHsgcG9zdElkIH0gPSB1c2UocGFyYW1zKTtcblxuICBjb25zdCBnZXRPbmVQb3N0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcblxuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9pbnN0YWdyYW0tYmFja2VuZC1lM2VxLm9ucmVuZGVyLmNvbS9wb3N0L2dldE9uZVBvc3QvJHtwb3N0SWR9YCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBqc29uRGF0YS5qc29uKCk7XG4gICAgc2V0UG9zdChyZXNwb25zZSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0T25lUG9zdCgpO1xuICB9LCBbXSk7XG4gIHJldHVybiA8ZGl2Pnt9PC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYWdlIiwicGFyYW1zIiwicG9zdCIsInNldFBvc3QiLCJwb3N0SWQiLCJnZXRPbmVQb3N0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwianNvbkRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJqc29uIiwiZGl2Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/onePost/[postId]/page.tsx\n"));

/***/ })

});