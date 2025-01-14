"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/user/[userId]/page",{

/***/ "(app-pages-browser)/./src/app/posts/user/[userId]/page.tsx":
/*!**********************************************!*\
  !*** ./src/app/posts/user/[userId]/page.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _custom_components_BottomNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/custom-components/BottomNav */ \"(app-pages-browser)/./src/custom-components/BottomNav.tsx\");\n/* harmony import */ var _custom_components_FollowButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/custom-components/FollowButton */ \"(app-pages-browser)/./src/custom-components/FollowButton.tsx\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Page = (param)=>{\n    let { params } = param;\n    _s();\n    const { userId } = (0,react__WEBPACK_IMPORTED_MODULE_7__.use)(params);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();\n    var _localStorage_getItem;\n    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__.jwtDecode)((_localStorage_getItem = localStorage.getItem(\"accessToken\")) !== null && _localStorage_getItem !== void 0 ? _localStorage_getItem : \"\");\n    if (decodedToken.userId == userId) {\n        window.location.href = \"/profile/\".concat(userId);\n    }\n    const getUserData = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)({\n        \"Page.useCallback[getUserData]\": async ()=>{\n            const token = localStorage.getItem(\"accessToken\");\n            const jsonData = await fetch(\"https://instagram-backend-e3eq.onrender.com/user/\".concat(userId), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token),\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const response = await jsonData.json();\n            console.log(response);\n            setUser(response);\n        }\n    }[\"Page.useCallback[getUserData]\"], [\n        userId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            getUserData();\n        }\n    }[\"Page.useEffect\"], [\n        getUserData\n    ]);\n    const postCount = user === null || user === void 0 ? void 0 : user.posts.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"w-screen h-screen bg-black border-none rounded-none relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                className: \"flex justify-center pt-5 pb-0 gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/3  h-[100px] flex justify-center items-center\",\n                        children: (user === null || user === void 0 ? void 0 : user.proImg) == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                            className: \"w-3/4 h-3/4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                                src: \"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                            className: \"w-[77px] h-[77px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                                src: user.proImg\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/3 flex flex-col justify-center space-y-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-1/3 font-extrabold text-xl flex justify-start items-center text-white\",\n                                children: user === null || user === void 0 ? void 0 : user.username\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_custom_components_FollowButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                userData: user\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                className: \"w-screen flex flex-col items-center pt-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white font-sans font-bold w-5/6 \",\n                        children: user === null || user === void 0 ? void 0 : user.fullname\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-5/6 font-sans font-medium \",\n                        children: user === null || user === void 0 ? void 0 : user.bio\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex w-screen border border-gray-500 border-r-0 border-l-0 justify-center pt-3 pb-3 mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: user === null || user === void 0 ? void 0 : user.posts.length\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined),\n                            \" posts\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: user === null || user === void 0 ? void 0 : user.followers.length\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            \"followers\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: user === null || user === void 0 ? void 0 : user.following.length\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            \"following\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            postCount == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"No post yet\"\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n                className: \"p-0 flex flex-wrap justify-between\",\n                children: user === null || user === void 0 ? void 0 : user.posts.map((post)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-0 w-[33%] mt-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            src: post.postImg,\n                            className: \"aspect-square\",\n                            alt: \"Description\",\n                            width: 500,\n                            height: 500\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 17\n                        }, undefined)\n                    }, post._id, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen fixed bottom-0 left-0 bg-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_custom_components_BottomNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    \"s\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"Wk3lxgGqJDvjVlbq53XawV+9Y30=\");\n_c = Page;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvdXNlci9bdXNlcklkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNkQ7QUFPL0I7QUFDd0I7QUFDTTtBQUVyQjtBQUNSO0FBQytCO0FBTTlELE1BQU1lLE9BQU87UUFBQyxFQUFFQyxNQUFNLEVBQTJDOztJQUMvRCxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHTiwwQ0FBR0EsQ0FBQ0s7SUFDdkIsTUFBTSxDQUFDRSxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQTtRQUU5Qk07SUFERixNQUFNQyxlQUFlWixxREFBU0EsQ0FDNUJXLENBQUFBLHdCQUFBQSxhQUFhRSxPQUFPLENBQUMsNEJBQXJCRixtQ0FBQUEsd0JBQXVDO0lBRXpDLElBQUlDLGFBQWFKLE1BQU0sSUFBSUEsUUFBUTtRQUNqQ00sT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsWUFBbUIsT0FBUFI7SUFDckM7SUFDQSxNQUFNUyxjQUFjZCxrREFBV0E7eUNBQUM7WUFDOUIsTUFBTWUsUUFBUVAsYUFBYUUsT0FBTyxDQUFDO1lBQ25DLE1BQU1NLFdBQVcsTUFBTUMsTUFDckIsb0RBQTJELE9BQVBaLFNBQ3BEO2dCQUNFYSxTQUFTO29CQUNQQyxlQUFlLFVBQWdCLE9BQU5KO29CQUN6QixnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFRixNQUFNSyxXQUFXLE1BQU1KLFNBQVNLLElBQUk7WUFDcENDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWmIsUUFBUWE7UUFDVjt3Q0FBRztRQUFDZjtLQUFPO0lBQ1hKLGdEQUFTQTswQkFBQztZQUNSYTtRQUNGO3lCQUFHO1FBQUNBO0tBQVk7SUFDaEIsTUFBTVUsWUFBWWxCLGlCQUFBQSwyQkFBQUEsS0FBTW1CLEtBQUssQ0FBQ0MsTUFBTTtJQUNwQyxxQkFDRSw4REFBQ3BDLHFEQUFJQTtRQUFDcUMsV0FBVTs7MEJBQ2QsOERBQUNqQywyREFBVUE7Z0JBQUNpQyxXQUFVOztrQ0FDcEIsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNackIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNdUIsTUFBTSxLQUFJLHFCQUNmLDhEQUFDekMseURBQU1BOzRCQUFDdUMsV0FBVTtzQ0FDaEIsNEVBQUN0Qyw4REFBV0E7Z0NBQUN5QyxLQUFJOzs7Ozs7Ozs7O3NEQUduQiw4REFBQzFDLHlEQUFNQTs0QkFBQ3VDLFdBQVU7c0NBQ2hCLDRFQUFDdEMsOERBQVdBO2dDQUFDeUMsS0FBS3hCLEtBQUt1QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUluQyw4REFBQ0Q7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDWnJCLGlCQUFBQSwyQkFBQUEsS0FBTXlCLFFBQVE7Ozs7OzswQ0FFakIsOERBQUNuQyx1RUFBWUE7Z0NBQUNvQyxVQUFVMUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHNUIsOERBQUNkLGdFQUFlQTtnQkFBQ21DLFdBQVU7O2tDQUN6Qiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ1pyQixpQkFBQUEsMkJBQUFBLEtBQU0yQixRQUFROzs7Ozs7a0NBRWpCLDhEQUFDTDt3QkFBSUQsV0FBVTtrQ0FDWnJCLGlCQUFBQSwyQkFBQUEsS0FBTTRCLEdBQUc7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQzNDLDREQUFXQTtnQkFBQ29DLFdBQVU7O2tDQUNyQiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBRVIsV0FBVTswQ0FBd0JyQixpQkFBQUEsMkJBQUFBLEtBQU1tQixLQUFLLENBQUNDLE1BQU07Ozs7Ozs0QkFBSzs7Ozs7OztrQ0FFOUQsOERBQUNFO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQUVSLFdBQVU7MENBQXdCckIsaUJBQUFBLDJCQUFBQSxLQUFNOEIsU0FBUyxDQUFDVixNQUFNOzs7Ozs7NEJBQU07NEJBQUk7Ozs7Ozs7a0NBR3ZFLDhEQUFDRTt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFFUixXQUFVOzBDQUF3QnJCLGlCQUFBQSwyQkFBQUEsS0FBTStCLFNBQVMsQ0FBQ1gsTUFBTTs7Ozs7OzRCQUFNOzRCQUFJOzs7Ozs7Ozs7Ozs7O1lBSXhFRixhQUFhLGtCQUNaLDhEQUFDSTswQkFBSTs7Ozs7MENBRUwsOERBQUNuQywyREFBVUE7Z0JBQUNrQyxXQUFVOzBCQUNuQnJCLGlCQUFBQSwyQkFBQUEsS0FBTW1CLEtBQUssQ0FBQ2EsR0FBRyxDQUFDLENBQUNDO29CQUNoQixxQkFDRSw4REFBQ1g7d0JBQW1CRCxXQUFVO2tDQUM1Qiw0RUFBQzdCLGtEQUFLQTs0QkFDSmdDLEtBQUtTLEtBQUtDLE9BQU87NEJBQ2pCYixXQUFVOzRCQUNWYyxLQUFLOzRCQUNMQyxPQUFPOzRCQUNQQyxRQUFROzs7Ozs7dUJBTkZKLEtBQUtLLEdBQUc7Ozs7O2dCQVV0Qjs7Ozs7OzBCQUdKLDhEQUFDaEI7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDaEMsb0VBQVNBOzs7OztvQkFBRzs7Ozs7Ozs7Ozs7OztBQUlyQjtHQTlGTVE7S0FBQUE7QUErRk4saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy8yNEhQMDAxNi9EZXNrdG9wL0lHL3dlYi9zcmMvYXBwL3Bvc3RzL3VzZXIvW3VzZXJJZF0vcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBBdmF0YXIsIEF2YXRhckltYWdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hdmF0YXJcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkRGVzY3JpcHRpb24sXG4gIENhcmRGb290ZXIsXG4gIENhcmRIZWFkZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IEJvdHRvbU5hdiBmcm9tIFwiQC9jdXN0b20tY29tcG9uZW50cy9Cb3R0b21OYXZcIjtcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSBcIkAvY3VzdG9tLWNvbXBvbmVudHMvRm9sbG93QnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VyVHlwZSB9IGZyb20gXCJAL2N1c3RvbS1jb21wb25lbnRzL2lzTGlrZWRcIjtcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbnR5cGUgSnd0UGF5bG9hZCA9IHtcbiAgZXhwOiBudW1iZXI7XG4gIGlhdDogbnVtYmVyO1xuICB1c2VySWQ6IHN0cmluZztcbn07XG5jb25zdCBQYWdlID0gKHsgcGFyYW1zIH06IHsgcGFyYW1zOiBQcm9taXNlPHsgdXNlcklkOiBzdHJpbmcgfT4gfSkgPT4ge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gdXNlKHBhcmFtcyk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPHVzZXJUeXBlPigpO1xuICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3REZWNvZGU8Snd0UGF5bG9hZD4oXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKSA/PyBcIlwiXG4gICk7XG4gIGlmIChkZWNvZGVkVG9rZW4udXNlcklkID09IHVzZXJJZCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9wcm9maWxlLyR7dXNlcklkfWA7XG4gIH1cbiAgY29uc3QgZ2V0VXNlckRhdGEgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9pbnN0YWdyYW0tYmFja2VuZC1lM2VxLm9ucmVuZGVyLmNvbS91c2VyLyR7dXNlcklkfWAsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQganNvbkRhdGEuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBzZXRVc2VyKHJlc3BvbnNlKTtcbiAgfSwgW3VzZXJJZF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFVzZXJEYXRhKCk7XG4gIH0sIFtnZXRVc2VyRGF0YV0pO1xuICBjb25zdCBwb3N0Q291bnQgPSB1c2VyPy5wb3N0cy5sZW5ndGg7XG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gYmctYmxhY2sgYm9yZGVyLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlXCI+XG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTUgcGItMCBnYXAtNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zICBoLVsxMDBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7dXNlcj8ucHJvSW1nID09IG51bGwgPyAoXG4gICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cInctMy80IGgtMy80XCI+XG4gICAgICAgICAgICAgIDxBdmF0YXJJbWFnZSBzcmM9XCJodHRwczovL3N0YXRpYy52ZWN0ZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy90aHVtYm5haWxzLzAwOS8yOTIvMjQ0L3NtYWxsL2RlZmF1bHQtYXZhdGFyLWljb24tb2Ytc29jaWFsLW1lZGlhLXVzZXItdmVjdG9yLmpwZ1wiIC8+XG4gICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJ3LVs3N3B4XSBoLVs3N3B4XVwiPlxuICAgICAgICAgICAgICA8QXZhdGFySW1hZ2Ugc3JjPXt1c2VyLnByb0ltZ30gLz5cbiAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgc3BhY2UteS0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEvMyBmb250LWV4dHJhYm9sZCB0ZXh0LXhsIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAge3VzZXI/LnVzZXJuYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb2xsb3dCdXR0b24gdXNlckRhdGE9e3VzZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgPENhcmREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwdC01IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zYW5zIGZvbnQtYm9sZCB3LTUvNiBcIj5cbiAgICAgICAgICB7dXNlcj8uZnVsbG5hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdy01LzYgZm9udC1zYW5zIGZvbnQtbWVkaXVtIFwiPlxuICAgICAgICAgIHt1c2VyPy5iaW99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBib3JkZXIgYm9yZGVyLWdyYXktNTAwIGJvcmRlci1yLTAgYm9yZGVyLWwtMCBqdXN0aWZ5LWNlbnRlciBwdC0zIHBiLTMgbXQtNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdy0xLzMgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPnt1c2VyPy5wb3N0cy5sZW5ndGh9PC9wPiBwb3N0c1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHctMS8zIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGRcIj57dXNlcj8uZm9sbG93ZXJzLmxlbmd0aH08L3A+e1wiIFwifVxuICAgICAgICAgIGZvbGxvd2Vyc1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHctMS8zIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGRcIj57dXNlcj8uZm9sbG93aW5nLmxlbmd0aH08L3A+e1wiIFwifVxuICAgICAgICAgIGZvbGxvd2luZ1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICB7cG9zdENvdW50ID09IDAgPyAoXG4gICAgICAgIDxkaXY+Tm8gcG9zdCB5ZXQ8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT1cInAtMCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICB7dXNlcj8ucG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5faWR9IGNsYXNzTmFtZT1cInAtMCB3LVszMyVdIG10LTFcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5wb3N0SW1nfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNwZWN0LXNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICBhbHQ9e1wiRGVzY3JpcHRpb25cIn1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGZpeGVkIGJvdHRvbS0wIGxlZnQtMCBiZy1ibGFja1wiPlxuICAgICAgICA8Qm90dG9tTmF2IC8+c1xuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiQXZhdGFySW1hZ2UiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsIkJvdHRvbU5hdiIsIkZvbGxvd0J1dHRvbiIsImp3dERlY29kZSIsIkltYWdlIiwidXNlIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJwYXJhbXMiLCJ1c2VySWQiLCJ1c2VyIiwic2V0VXNlciIsImxvY2FsU3RvcmFnZSIsImRlY29kZWRUb2tlbiIsImdldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJnZXRVc2VyRGF0YSIsInRva2VuIiwianNvbkRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInBvc3RDb3VudCIsInBvc3RzIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiZGl2IiwicHJvSW1nIiwic3JjIiwidXNlcm5hbWUiLCJ1c2VyRGF0YSIsImZ1bGxuYW1lIiwiYmlvIiwicCIsImZvbGxvd2VycyIsImZvbGxvd2luZyIsIm1hcCIsInBvc3QiLCJwb3N0SW1nIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJfaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/user/[userId]/page.tsx\n"));

/***/ })

});