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

/***/ "(app-pages-browser)/./src/custom-components/PostFooter.tsx":
/*!**********************************************!*\
  !*** ./src/custom-components/PostFooter.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostFooter: () => (/* binding */ PostFooter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _isLiked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLiked */ \"(app-pages-browser)/./src/custom-components/isLiked.tsx\");\n/* harmony import */ var _barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Bookmark,MessageCircle,Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-circle.js\");\n/* harmony import */ var _barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Bookmark,MessageCircle,Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/send.js\");\n/* harmony import */ var _barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Bookmark,MessageCircle,Send!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/bookmark.js\");\n/* harmony import */ var _LikedUsersDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LikedUsersDialog */ \"(app-pages-browser)/./src/custom-components/LikedUsersDialog.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n\n\n\n\nconst PostFooter = (param)=>{\n    let { likedUsers, postId, postComments, postCaption, username } = param;\n    var _localStorage_getItem;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {\n        className: \"space-y-2 flex flex-col items-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    width: \"full\"\n                },\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_isLiked__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                token: (_localStorage_getItem = localStorage.getItem(\"accessToken\")) !== null && _localStorage_getItem !== void 0 ? _localStorage_getItem : \"\",\n                                likedUsers: likedUsers,\n                                postId: postId\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/posts/\".concat(postId),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"text-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"text-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bookmark_MessageCircle_Send_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"text-white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikedUsersDialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                likedUsers: likedUsers\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white font-semibold\",\n                        children: username\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white\",\n                        children: postCaption\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            (postComments !== null && postComments !== void 0 ? postComments : \"\".length > 0) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"text-white text-sm font-sans font-bold\",\n                    href: \"/posts/\".concat(postId),\n                    children: [\n                        \"View all \",\n                        postComments.length,\n                        \" comments\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/24HP0016/Desktop/IG/web/src/custom-components/PostFooter.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostFooter;\nvar _c;\n$RefreshReg$(_c, \"PostFooter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9Qb3N0Rm9vdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ2xCO0FBQzZCO0FBQ1g7QUFDckI7QUE0QnRCLE1BQU1PLGFBQWE7UUFBQyxFQUN6QkMsVUFBVSxFQUNWQyxNQUFNLEVBQ05DLFlBQVksRUFDWkMsV0FBVyxFQUNYQyxRQUFRLEVBT1Q7UUFha0JDO0lBWmpCLHFCQUNFLDhEQUFDYiwyREFBVUE7UUFBQ2MsV0FBVTs7MEJBQ3BCLDhEQUFDQztnQkFDQ0MsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsZ0JBQWdCO29CQUNoQkMsT0FBTztnQkFDVDtnQkFDQUwsV0FBVTs7a0NBRVYsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ2IsZ0RBQU9BO2dDQUNObUIsT0FBT1AsQ0FBQUEsd0JBQUFBLGFBQWFRLE9BQU8sQ0FBQyw0QkFBckJSLG1DQUFBQSx3QkFBdUM7Z0NBQzlDTCxZQUFZQTtnQ0FDWkMsUUFBUUE7Ozs7OzswQ0FFViw4REFBQ0gsaURBQUlBO2dDQUFDZ0IsTUFBTSxVQUFpQixPQUFQYjswQ0FDcEIsNEVBQUNOLHVHQUFhQTtvQ0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7MENBRTNCLDhEQUFDVix1R0FBSUE7Z0NBQUNVLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFbEIsOERBQUNDO2tDQUNDLDRFQUFDYix1R0FBUUE7NEJBQUNZLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl4Qiw4REFBQ1QseURBQWdCQTtnQkFBQ0csWUFBWUE7Ozs7OzswQkFDOUIsOERBQUNPO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQTRCRjs7Ozs7O2tDQUMzQyw4REFBQ1c7d0JBQUVULFdBQVU7a0NBQWNIOzs7Ozs7Ozs7Ozs7WUFFNUJELENBQUFBLHlCQUFBQSwwQkFBQUEsZUFBZ0IsR0FBR2MsTUFBTSxHQUFHLG1CQUMzQiw4REFBQ1Q7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNSLGlEQUFJQTtvQkFDSFEsV0FBVTtvQkFDVlEsTUFBTSxVQUFpQixPQUFQYjs7d0JBQ2pCO3dCQUNXQyxhQUFhYyxNQUFNO3dCQUFDOzs7Ozs7Ozs7Ozs0QkFHaEM7Ozs7Ozs7QUFHVixFQUFFO0tBeERXakIiLCJzb3VyY2VzIjpbIi9Vc2Vycy8yNEhQMDAxNi9EZXNrdG9wL0lHL3dlYi9zcmMvY3VzdG9tLWNvbXBvbmVudHMvUG9zdEZvb3Rlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZEZvb3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IElzTGlrZWQgZnJvbSBcIi4vaXNMaWtlZFwiO1xuaW1wb3J0IHsgQm9va21hcmssIE1lc3NhZ2VDaXJjbGUsIFNlbmQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgTGlrZWRVc2Vyc0RpYWxvZyBmcm9tIFwiLi9MaWtlZFVzZXJzRGlhbG9nXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbnR5cGUgbGlrZVR5cGUgPSB7XG4gIHByb0ltZzogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBfaWQ6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbn07XG5leHBvcnQgdHlwZSBwb3N0VHlwZSA9IHtcbiAgX2lkOiBzdHJpbmc7XG4gIGNhcHRpb246IHN0cmluZztcbiAgcG9zdEltZzogc3RyaW5nO1xuICB1c2VySWQ6IHVzZXJUeXBlO1xuICBsaWtlczogbGlrZVR5cGVbXTtcbiAgY29tbWVudHM6IGNvbW1lbnRUeXBlW107XG59W107XG5cbmV4cG9ydCB0eXBlIHVzZXJUeXBlID0ge1xuICBfaWQ6IHN0cmluZztcbiAgcHJvSW1nOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG59O1xuZXhwb3J0IHR5cGUgY29tbWVudFR5cGUgPSB7XG4gIGNvbW1lbnQ6IHN0cmluZztcbiAgX2lkOiBzdHJpbmc7XG4gIHVzZXJJZDogdXNlclR5cGU7XG4gIHBvc3RJZDogcG9zdFR5cGU7XG59O1xuZXhwb3J0IGNvbnN0IFBvc3RGb290ZXIgPSAoe1xuICBsaWtlZFVzZXJzLFxuICBwb3N0SWQsXG4gIHBvc3RDb21tZW50cyxcbiAgcG9zdENhcHRpb24sXG4gIHVzZXJuYW1lLFxufToge1xuICBsaWtlZFVzZXJzOiBsaWtlVHlwZVtdIHwgdW5kZWZpbmVkO1xuICBwb3N0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcG9zdENvbW1lbnRzOiBjb21tZW50VHlwZVtdIHwgdW5kZWZpbmVkO1xuICBwb3N0Q2FwdGlvbjogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT1cInNwYWNlLXktMiBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgIHdpZHRoOiBcImZ1bGxcIixcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICA8SXNMaWtlZFxuICAgICAgICAgICAgdG9rZW49e2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIikgPz8gXCJcIn1cbiAgICAgICAgICAgIGxpa2VkVXNlcnM9e2xpa2VkVXNlcnN9XG4gICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0SWR9YH0+XG4gICAgICAgICAgICA8TWVzc2FnZUNpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPFNlbmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCb29rbWFyayBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPExpa2VkVXNlcnNEaWFsb2cgbGlrZWRVc2Vycz17bGlrZWRVc2Vyc30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiPnt1c2VybmFtZX08L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntwb3N0Q2FwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtwb3N0Q29tbWVudHMgPz8gXCJcIi5sZW5ndGggPiAwID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1zYW5zIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICBocmVmPXtgL3Bvc3RzLyR7cG9zdElkfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBhbGwge3Bvc3RDb21tZW50cy5sZW5ndGh9IGNvbW1lbnRzXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvQ2FyZEZvb3Rlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiQ2FyZEZvb3RlciIsIklzTGlrZWQiLCJCb29rbWFyayIsIk1lc3NhZ2VDaXJjbGUiLCJTZW5kIiwiTGlrZWRVc2Vyc0RpYWxvZyIsIkxpbmsiLCJQb3N0Rm9vdGVyIiwibGlrZWRVc2VycyIsInBvc3RJZCIsInBvc3RDb21tZW50cyIsInBvc3RDYXB0aW9uIiwidXNlcm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwidG9rZW4iLCJnZXRJdGVtIiwiaHJlZiIsInAiLCJsZW5ndGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/custom-components/PostFooter.tsx\n"));

/***/ })

});