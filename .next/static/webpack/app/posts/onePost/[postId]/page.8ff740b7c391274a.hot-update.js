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

/***/ "(app-pages-browser)/./src/custom-components/PostContent.tsx":
/*!***********************************************!*\
  !*** ./src/custom-components/PostContent.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostContent: () => (/* binding */ PostContent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/carousel */ \"(app-pages-browser)/./src/components/ui/carousel.tsx\");\n\n\n\nconst PostContent = (param)=>{\n    let { postImage, post } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n        className: \"flex justify-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                    children: [\n                        \" \",\n                        (post === null || post === void 0 ? void 0 : post.postImg) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: postImage,\n                            alt: \"Post Image\",\n                            priority: false | true\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostContent.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 15\n                        }, undefined) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostContent.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostContent.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostContent.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostContent.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9Qb3N0Q29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFLakI7QUFHM0IsTUFBTUksY0FBYztRQUFDLEVBQzFCQyxTQUFTLEVBQ1RDLElBQUksRUFJTDtJQUNDLHFCQUNFLDhEQUFDTiw0REFBV0E7UUFBQ08sV0FBVTtrQkFDckIsNEVBQUNOLDZEQUFRQTtzQkFDUCw0RUFBQ0Msb0VBQWVBOzBCQUNkLDRFQUFDQyxpRUFBWUE7O3dCQUNWO3dCQUNBRyxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1FLE9BQU8sa0JBQ1osOERBQUNDOzRCQUFJQyxLQUFLTDs0QkFBV00sS0FBSTs0QkFBYUMsVUFBVSxRQUFROzs7Ozt3Q0FDdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmhCLEVBQUU7S0EvQldSIiwic291cmNlcyI6WyIvVXNlcnMvMjRIUDAwMTYvRGVza3RvcC9JRy93ZWIvc3JjL2N1c3RvbS1jb21wb25lbnRzL1Bvc3RDb250ZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3N0VHlwZSB9IGZyb20gXCJAL2FwcC9wb3N0cy9vbmVQb3N0L1twb3N0SWRdL3BhZ2VcIjtcbmltcG9ydCB7IENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQge1xuICBDYXJvdXNlbCxcbiAgQ2Fyb3VzZWxDb250ZW50LFxuICBDYXJvdXNlbEl0ZW0sXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2Fyb3VzZWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgY29uc3QgUG9zdENvbnRlbnQgPSAoe1xuICBwb3N0SW1hZ2UsXG4gIHBvc3QsXG59OiB7XG4gIHBvc3RJbWFnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwb3N0OiBwb3N0VHlwZSB8IHVuZGVmaW5lZDtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBcIj5cbiAgICAgIDxDYXJvdXNlbD5cbiAgICAgICAgPENhcm91c2VsQ29udGVudD5cbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAge3Bvc3Q/LnBvc3RJbWcgPyAoXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0SW1hZ2V9IGFsdD1cIlBvc3QgSW1hZ2VcIiBwcmlvcml0eT17ZmFsc2UgfCB0cnVlfSAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgey8qIDxDYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8aW1nIHNyYz17cG9zdEltYWdlfSBjbGFzc05hbWU9XCJ3LXNjcmVlblwiIC8+XG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgPENhcm91c2VsSXRlbT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0SW1hZ2V9IGNsYXNzTmFtZT1cInctc2NyZWVuXCIgLz5cXFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+ICovfVxuICAgICAgICA8L0Nhcm91c2VsQ29udGVudD5cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9DYXJkQ29udGVudD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiQ2FyZENvbnRlbnQiLCJDYXJvdXNlbCIsIkNhcm91c2VsQ29udGVudCIsIkNhcm91c2VsSXRlbSIsIlBvc3RDb250ZW50IiwicG9zdEltYWdlIiwicG9zdCIsImNsYXNzTmFtZSIsInBvc3RJbWciLCJpbWciLCJzcmMiLCJhbHQiLCJwcmlvcml0eSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/custom-components/PostContent.tsx\n"));

/***/ })

});