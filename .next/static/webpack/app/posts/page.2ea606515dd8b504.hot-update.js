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

/***/ "(app-pages-browser)/./src/custom-components/PostFooter.tsx":
/*!**********************************************!*\
  !*** ./src/custom-components/PostFooter.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostFooter: () => (/* binding */ PostFooter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _isLiked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLiked */ \"(app-pages-browser)/./src/custom-components/isLiked.tsx\");\n/* harmony import */ var _barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Bookmark,MessageCircle,Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-circle.js\");\n/* harmony import */ var _barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Bookmark,MessageCircle,Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/send.js\");\n/* harmony import */ var _barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Bookmark,MessageCircle,Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/bookmark.js\");\n/* harmony import */ var _LikedUsersDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LikedUsersDialog */ \"(app-pages-browser)/./src/custom-components/LikedUsersDialog.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n\n\n\n\nconst PostFooter = (param)=>{\n    let { likedUsers, postId, postComments, postCaption, username } = param;\n    var _localStorage_getItem;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {\n        className: \"space-y-2 flex flex-col items-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    width: \"full\"\n                },\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_isLiked__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                token: (_localStorage_getItem = localStorage.getItem(\"accessToken\")) !== null && _localStorage_getItem !== void 0 ? _localStorage_getItem : \"\",\n                                likedUsers: likedUsers,\n                                postId: postId\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/posts/\".concat(postId),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"text-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"text-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"text-white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikedUsersDialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                likedUsers: likedUsers\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white font-semibold\",\n                        children: username\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white\",\n                        children: postCaption\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            postComments.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"text-white text-sm font-sans font-bold\",\n                    href: \"/posts/\".concat(postId),\n                    children: [\n                        \"View all \",\n                        postComments.length,\n                        \" comments\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostFooter;\nvar _c;\n$RefreshReg$(_c, \"PostFooter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9Qb3N0Rm9vdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ2xCO0FBQzZCO0FBQ1g7QUFDckI7QUE0QnRCLE1BQU1PLGFBQWE7UUFBQyxFQUN6QkMsVUFBVSxFQUNWQyxNQUFNLEVBQ05DLFlBQVksRUFDWkMsV0FBVyxFQUNYQyxRQUFRLEVBT1Q7UUFha0JDO0lBWmpCLHFCQUNFLDhEQUFDYiwyREFBVUE7UUFBQ2MsV0FBVTs7MEJBQ3BCLDhEQUFDQztnQkFDQ0MsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsZ0JBQWdCO29CQUNoQkMsT0FBTztnQkFDVDtnQkFDQUwsV0FBVTs7a0NBRVYsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ2IsZ0RBQU9BO2dDQUNObUIsT0FBT1AsQ0FBQUEsd0JBQUFBLGFBQWFRLE9BQU8sQ0FBQyw0QkFBckJSLG1DQUFBQSx3QkFBdUM7Z0NBQzlDTCxZQUFZQTtnQ0FDWkMsUUFBUUE7Ozs7OzswQ0FFViw4REFBQ0gsaURBQUlBO2dDQUFDZ0IsTUFBTSxVQUFpQixPQUFQYjswQ0FDcEIsNEVBQUNOLHVHQUFhQTtvQ0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7MENBRTNCLDhEQUFDVix1R0FBSUE7Z0NBQUNVLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFbEIsOERBQUNDO2tDQUNDLDRFQUFDYix1R0FBUUE7NEJBQUNZLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl4Qiw4REFBQ1QseURBQWdCQTtnQkFBQ0csWUFBWUE7Ozs7OzswQkFDOUIsOERBQUNPO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQTRCRjs7Ozs7O2tDQUMzQyw4REFBQ1c7d0JBQUVULFdBQVU7a0NBQWNIOzs7Ozs7Ozs7Ozs7WUFFNUJELGFBQWFjLE1BQU0sR0FBRyxrQkFDckIsOERBQUNUO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDUixpREFBSUE7b0JBQ0hRLFdBQVU7b0JBQ1ZRLE1BQU0sVUFBaUIsT0FBUGI7O3dCQUNqQjt3QkFDV0MsYUFBYWMsTUFBTTt3QkFBQzs7Ozs7Ozs7Ozs7NEJBR2hDOzs7Ozs7O0FBR1YsRUFBRTtLQXhEV2pCIiwic291cmNlcyI6WyIvVXNlcnMvMjRIUDAwMTYvRGVza3RvcC9JRy93ZWIvc3JjL2N1c3RvbS1jb21wb25lbnRzL1Bvc3RGb290ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCBJc0xpa2VkIGZyb20gXCIuL2lzTGlrZWRcIjtcbmltcG9ydCB7IEJvb2ttYXJrLCBNZXNzYWdlQ2lyY2xlLCBTZW5kIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IExpa2VkVXNlcnNEaWFsb2cgZnJvbSBcIi4vTGlrZWRVc2Vyc0RpYWxvZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG50eXBlIGxpa2VUeXBlID0ge1xuICBwcm9JbWc6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgX2lkOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG59O1xuZXhwb3J0IHR5cGUgcG9zdFR5cGUgPSB7XG4gIF9pZDogc3RyaW5nO1xuICBjYXB0aW9uOiBzdHJpbmc7XG4gIHBvc3RJbWc6IHN0cmluZztcbiAgdXNlcklkOiB1c2VyVHlwZTtcbiAgbGlrZXM6IGxpa2VUeXBlW107XG4gIGNvbW1lbnRzOiBjb21tZW50VHlwZVtdO1xufVtdO1xuXG5leHBvcnQgdHlwZSB1c2VyVHlwZSA9IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHByb0ltZzogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xufTtcbmV4cG9ydCB0eXBlIGNvbW1lbnRUeXBlID0ge1xuICBjb21tZW50OiBzdHJpbmc7XG4gIF9pZDogc3RyaW5nO1xuICB1c2VySWQ6IHVzZXJUeXBlO1xuICBwb3N0SWQ6IHBvc3RUeXBlO1xufTtcbmV4cG9ydCBjb25zdCBQb3N0Rm9vdGVyID0gKHtcbiAgbGlrZWRVc2VycyxcbiAgcG9zdElkLFxuICBwb3N0Q29tbWVudHMsXG4gIHBvc3RDYXB0aW9uLFxuICB1c2VybmFtZSxcbn06IHtcbiAgbGlrZWRVc2VyczogbGlrZVR5cGVbXSB8IHVuZGVmaW5lZDtcbiAgcG9zdElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHBvc3RDb21tZW50czogY29tbWVudFR5cGVbXSB8IHVuZGVmaW5lZDtcbiAgcG9zdENhcHRpb246IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJzcGFjZS15LTIgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydFwiPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICB3aWR0aDogXCJmdWxsXCIsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgPElzTGlrZWRcbiAgICAgICAgICAgIHRva2VuPXtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpID8/IFwiXCJ9XG4gICAgICAgICAgICBsaWtlZFVzZXJzPXtsaWtlZFVzZXJzfVxuICAgICAgICAgICAgcG9zdElkPXtwb3N0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7cG9zdElkfWB9PlxuICAgICAgICAgICAgPE1lc3NhZ2VDaXJjbGUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxTZW5kIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Qm9va21hcmsgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxMaWtlZFVzZXJzRGlhbG9nIGxpa2VkVXNlcnM9e2xpa2VkVXNlcnN9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGRcIj57dXNlcm5hbWV9PC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57cG9zdENhcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICB7cG9zdENvbW1lbnRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbSBmb250LXNhbnMgZm9udC1ib2xkXCJcbiAgICAgICAgICAgIGhyZWY9e2AvcG9zdHMvJHtwb3N0SWR9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IGFsbCB7cG9zdENvbW1lbnRzLmxlbmd0aH0gY29tbWVudHNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9DYXJkRm9vdGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJDYXJkRm9vdGVyIiwiSXNMaWtlZCIsIkJvb2ttYXJrIiwiTWVzc2FnZUNpcmNsZSIsIlNlbmQiLCJMaWtlZFVzZXJzRGlhbG9nIiwiTGluayIsIlBvc3RGb290ZXIiLCJsaWtlZFVzZXJzIiwicG9zdElkIiwicG9zdENvbW1lbnRzIiwicG9zdENhcHRpb24iLCJ1c2VybmFtZSIsImxvY2FsU3RvcmFnZSIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJ0b2tlbiIsImdldEl0ZW0iLCJocmVmIiwicCIsImxlbmd0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/custom-components/PostFooter.tsx\n"));

/***/ })

});