"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/page",{

/***/ "(app-pages-browser)/./src/custom-components/PostContent.tsx":
/*!***********************************************!*\
  !*** ./src/custom-components/PostContent.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostContent: () => (/* binding */ PostContent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/carousel */ \"(app-pages-browser)/./src/components/ui/carousel.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n\nconst PostContent = (param)=>{\n    let { postImage } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n        className: \"flex justify-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: postImage !== null && postImage !== void 0 ? postImage : \"\",\n                            alt: \"Description\",\n                            width: 500,\n                            height: 500,\n                            decoding: \"async\",\n                            \"data-nimg\": \"1\",\n                            style: \"color:transparent;\"\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostContent.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostContent.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostContent.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostContent.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostContent.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9Qb3N0Q29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBS2pCO0FBQ0g7QUFFeEIsTUFBTUssY0FBYztRQUFDLEVBQzFCQyxTQUFTLEVBR1Y7SUFDQyxxQkFDRSw4REFBQ04sNERBQVdBO1FBQUNPLFdBQVU7a0JBQ3JCLDRFQUFDTiw2REFBUUE7c0JBQ1AsNEVBQUNDLG9FQUFlQTswQkFDZCw0RUFBQ0MsaUVBQVlBOzt3QkFDVjtzQ0FDRCw4REFBQ0Msa0RBQUtBOzRCQUNKSSxLQUFLRixzQkFBQUEsdUJBQUFBLFlBQWE7NEJBQ2xCRyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxVQUFTOzRCQUNUQyxhQUFVOzRCQUNWQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnJCLEVBQUU7S0FuQ1dUIiwic291cmNlcyI6WyIvVXNlcnMvMjRIUDAwMTYvRGVza3RvcC9JRy93ZWIvc3JjL2N1c3RvbS1jb21wb25lbnRzL1Bvc3RDb250ZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHtcbiAgQ2Fyb3VzZWwsXG4gIENhcm91c2VsQ29udGVudCxcbiAgQ2Fyb3VzZWxJdGVtLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Nhcm91c2VsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3RDb250ZW50ID0gKHtcbiAgcG9zdEltYWdlLFxufToge1xuICBwb3N0SW1hZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBcIj5cbiAgICAgIDxDYXJvdXNlbD5cbiAgICAgICAgPENhcm91c2VsQ29udGVudD5cbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17cG9zdEltYWdlID8/IFwiXCJ9XG4gICAgICAgICAgICAgIGFsdD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgICBkYXRhLW5pbWc9XCIxXCJcbiAgICAgICAgICAgICAgc3R5bGU9e1wiY29sb3I6dHJhbnNwYXJlbnQ7XCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgIHsvKiA8Q2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3RJbWFnZX0gY2xhc3NOYW1lPVwidy1zY3JlZW5cIiAvPlxuICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdEltYWdlfSBjbGFzc05hbWU9XCJ3LXNjcmVlblwiIC8+XFxcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPiAqL31cbiAgICAgICAgPC9DYXJvdXNlbENvbnRlbnQ+XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvQ2FyZENvbnRlbnQ+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkNhcmRDb250ZW50IiwiQ2Fyb3VzZWwiLCJDYXJvdXNlbENvbnRlbnQiLCJDYXJvdXNlbEl0ZW0iLCJJbWFnZSIsIlBvc3RDb250ZW50IiwicG9zdEltYWdlIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkZWNvZGluZyIsImRhdGEtbmltZyIsInN0eWxlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/custom-components/PostContent.tsx\n"));

/***/ })

});