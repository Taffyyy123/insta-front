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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _custom_components_BottomNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/custom-components/BottomNav */ \"(app-pages-browser)/./src/custom-components/BottomNav.tsx\");\n/* harmony import */ var _custom_components_FollowButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/custom-components/FollowButton */ \"(app-pages-browser)/./src/custom-components/FollowButton.tsx\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Page = (param)=>{\n    let { params } = param;\n    _s();\n    const { userId } = (0,react__WEBPACK_IMPORTED_MODULE_8__.use)(params);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();\n    var _localStorage_getItem;\n    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__.jwtDecode)((_localStorage_getItem = localStorage.getItem(\"accessToken\")) !== null && _localStorage_getItem !== void 0 ? _localStorage_getItem : \"\");\n    if (decodedToken.userId == userId) {\n        window.location.href = \"/profile/\".concat(userId);\n    }\n    const getUserData = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)({\n        \"Page.useCallback[getUserData]\": async ()=>{\n            const token = localStorage.getItem(\"accessToken\");\n            const jsonData = await fetch(\"https://instagram-backend-e3eq.onrender.com/user/\".concat(userId), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token),\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const response = await jsonData.json();\n            console.log(response);\n            setUser(response);\n        }\n    }[\"Page.useCallback[getUserData]\"], [\n        userId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            getUserData();\n        }\n    }[\"Page.useEffect\"], [\n        getUserData\n    ]);\n    const postCount = user === null || user === void 0 ? void 0 : user.posts.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"w-screen h-screen bg-black border-none rounded-none relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                className: \"flex justify-center pt-5 pb-0 gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/3  h-[100px] flex justify-center items-center\",\n                        children: (user === null || user === void 0 ? void 0 : user.proImg) == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                            className: \"w-3/4 h-3/4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                                src: \"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                            className: \"w-[77px] h-[77px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarImage, {\n                                src: user.proImg\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/3 flex flex-col justify-center space-y-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-1/3 font-extrabold text-xl flex justify-start items-center text-white\",\n                                children: user === null || user === void 0 ? void 0 : user.username\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_custom_components_FollowButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                userData: user\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                className: \"w-screen flex flex-col items-center pt-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white font-sans font-bold w-5/6 \",\n                        children: user === null || user === void 0 ? void 0 : user.fullname\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-5/6 font-sans font-medium \",\n                        children: user === null || user === void 0 ? void 0 : user.bio\n                    }, void 0, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                className: \"flex w-screen border border-gray-500 border-r-0 border-l-0 justify-center pt-3 pb-3 mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: user === null || user === void 0 ? void 0 : user.posts.length\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            \" posts\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: user === null || user === void 0 ? void 0 : user.followers.length\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            \"followers\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-400 w-1/3 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-bold\",\n                                children: user === null || user === void 0 ? void 0 : user.following.length\n                            }, void 0, false, {\n                                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            \"following\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            postCount == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"No post yet\"\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n                className: \"p-0 flex flex-wrap justify-between\",\n                children: user === null || user === void 0 ? void 0 : user.posts.map((post)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: \"p-0 w-[33%] mt-1\",\n                        href: \"/posts/onePost/\".concat(post._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            src: post.postImg,\n                            className: \"aspect-square\",\n                            alt: \"Description\",\n                            width: 500,\n                            height: 500\n                        }, void 0, false, {\n                            fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 17\n                        }, undefined)\n                    }, post._id, false, {\n                        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen fixed bottom-0 left-0 bg-black\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_custom_components_BottomNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/24HP0016/Desktop/IG/web/src/app/posts/user/[userId]/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"Wk3lxgGqJDvjVlbq53XawV+9Y30=\");\n_c = Page;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvdXNlci9bdXNlcklkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzZEO0FBTy9CO0FBQ3dCO0FBQ007QUFFckI7QUFDUjtBQUNGO0FBQ2lDO0FBTTlELE1BQU1nQixPQUFPO1FBQUMsRUFBRUMsTUFBTSxFQUEyQzs7SUFDL0QsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR04sMENBQUdBLENBQUNLO0lBQ3ZCLE1BQU0sQ0FBQ0UsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUE7UUFFOUJNO0lBREYsTUFBTUMsZUFBZWIscURBQVNBLENBQzVCWSxDQUFBQSx3QkFBQUEsYUFBYUUsT0FBTyxDQUFDLDRCQUFyQkYsbUNBQUFBLHdCQUF1QztJQUV6QyxJQUFJQyxhQUFhSixNQUFNLElBQUlBLFFBQVE7UUFDakNNLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFlBQW1CLE9BQVBSO0lBQ3JDO0lBQ0EsTUFBTVMsY0FBY2Qsa0RBQVdBO3lDQUFDO1lBQzlCLE1BQU1lLFFBQVFQLGFBQWFFLE9BQU8sQ0FBQztZQUNuQyxNQUFNTSxXQUFXLE1BQU1DLE1BQ3JCLG9EQUEyRCxPQUFQWixTQUNwRDtnQkFDRWEsU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOSjtvQkFDekIsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUYsTUFBTUssV0FBVyxNQUFNSixTQUFTSyxJQUFJO1lBQ3BDQyxRQUFRQyxHQUFHLENBQUNIO1lBQ1piLFFBQVFhO1FBQ1Y7d0NBQUc7UUFBQ2Y7S0FBTztJQUNYSixnREFBU0E7MEJBQUM7WUFDUmE7UUFDRjt5QkFBRztRQUFDQTtLQUFZO0lBQ2hCLE1BQU1VLFlBQVlsQixpQkFBQUEsMkJBQUFBLEtBQU1tQixLQUFLLENBQUNDLE1BQU07SUFDcEMscUJBQ0UsOERBQUNyQyxxREFBSUE7UUFBQ3NDLFdBQVU7OzBCQUNkLDhEQUFDbEMsMkRBQVVBO2dCQUFDa0MsV0FBVTs7a0NBQ3BCLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWnJCLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTXVCLE1BQU0sS0FBSSxxQkFDZiw4REFBQzFDLHlEQUFNQTs0QkFBQ3dDLFdBQVU7c0NBQ2hCLDRFQUFDdkMsOERBQVdBO2dDQUFDMEMsS0FBSTs7Ozs7Ozs7OztzREFHbkIsOERBQUMzQyx5REFBTUE7NEJBQUN3QyxXQUFVO3NDQUNoQiw0RUFBQ3ZDLDhEQUFXQTtnQ0FBQzBDLEtBQUt4QixLQUFLdUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJbkMsOERBQUNEO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUlELFdBQVU7MENBQ1pyQixpQkFBQUEsMkJBQUFBLEtBQU15QixRQUFROzs7Ozs7MENBRWpCLDhEQUFDcEMsdUVBQVlBO2dDQUFDcUMsVUFBVTFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzVCLDhEQUFDZixnRUFBZUE7Z0JBQUNvQyxXQUFVOztrQ0FDekIsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNackIsaUJBQUFBLDJCQUFBQSxLQUFNMkIsUUFBUTs7Ozs7O2tDQUVqQiw4REFBQ0w7d0JBQUlELFdBQVU7a0NBQ1pyQixpQkFBQUEsMkJBQUFBLEtBQU00QixHQUFHOzs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUM1Qyw0REFBV0E7Z0JBQUNxQyxXQUFVOztrQ0FDckIsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQUVSLFdBQVU7MENBQXdCckIsaUJBQUFBLDJCQUFBQSxLQUFNbUIsS0FBSyxDQUFDQyxNQUFNOzs7Ozs7NEJBQUs7Ozs7Ozs7a0NBRTlELDhEQUFDRTt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUFFUixXQUFVOzBDQUF3QnJCLGlCQUFBQSwyQkFBQUEsS0FBTThCLFNBQVMsQ0FBQ1YsTUFBTTs7Ozs7OzRCQUFNOzRCQUFJOzs7Ozs7O2tDQUd2RSw4REFBQ0U7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FBRVIsV0FBVTswQ0FBd0JyQixpQkFBQUEsMkJBQUFBLEtBQU0rQixTQUFTLENBQUNYLE1BQU07Ozs7Ozs0QkFBTTs0QkFBSTs7Ozs7Ozs7Ozs7OztZQUl4RUYsYUFBYSxrQkFDWiw4REFBQ0k7MEJBQUk7Ozs7OzBDQUVMLDhEQUFDcEMsMkRBQVVBO2dCQUFDbUMsV0FBVTswQkFDbkJyQixpQkFBQUEsMkJBQUFBLEtBQU1tQixLQUFLLENBQUNhLEdBQUcsQ0FBQyxDQUFDQztvQkFDaEIscUJBQ0UsOERBQUN6QyxpREFBSUE7d0JBRUg2QixXQUFVO3dCQUNWZCxNQUFNLGtCQUEyQixPQUFUMEIsS0FBS0MsR0FBRztrQ0FFaEMsNEVBQUMzQyxrREFBS0E7NEJBQ0ppQyxLQUFLUyxLQUFLRSxPQUFPOzRCQUNqQmQsV0FBVTs0QkFDVmUsS0FBSzs0QkFDTEMsT0FBTzs0QkFDUEMsUUFBUTs7Ozs7O3VCQVRMTCxLQUFLQyxHQUFHOzs7OztnQkFhbkI7Ozs7OzswQkFHSiw4REFBQ1o7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNqQyxvRUFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEI7R0FsR01TO0tBQUFBO0FBbUdOLGlFQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvMjRIUDAwMTYvRGVza3RvcC9JRy93ZWIvc3JjL2FwcC9wb3N0cy91c2VyL1t1c2VySWRdL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBBdmF0YXJJbWFnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYXZhdGFyXCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ2FyZERlc2NyaXB0aW9uLFxuICBDYXJkRm9vdGVyLFxuICBDYXJkSGVhZGVyLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCBCb3R0b21OYXYgZnJvbSBcIkAvY3VzdG9tLWNvbXBvbmVudHMvQm90dG9tTmF2XCI7XG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCJAL2N1c3RvbS1jb21wb25lbnRzL0ZvbGxvd0J1dHRvblwiO1xuaW1wb3J0IHsgdXNlclR5cGUgfSBmcm9tIFwiQC9jdXN0b20tY29tcG9uZW50cy9pc0xpa2VkXCI7XG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2UsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG50eXBlIEp3dFBheWxvYWQgPSB7XG4gIGV4cDogbnVtYmVyO1xuICBpYXQ6IG51bWJlcjtcbiAgdXNlcklkOiBzdHJpbmc7XG59O1xuY29uc3QgUGFnZSA9ICh7IHBhcmFtcyB9OiB7IHBhcmFtczogUHJvbWlzZTx7IHVzZXJJZDogc3RyaW5nIH0+IH0pID0+IHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IHVzZShwYXJhbXMpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTx1c2VyVHlwZT4oKTtcbiAgY29uc3QgZGVjb2RlZFRva2VuID0gand0RGVjb2RlPEp3dFBheWxvYWQ+KFxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIikgPz8gXCJcIlxuICApO1xuICBpZiAoZGVjb2RlZFRva2VuLnVzZXJJZCA9PSB1c2VySWQpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvcHJvZmlsZS8ke3VzZXJJZH1gO1xuICB9XG4gIGNvbnN0IGdldFVzZXJEYXRhID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vaW5zdGFncmFtLWJhY2tlbmQtZTNlcS5vbnJlbmRlci5jb20vdXNlci8ke3VzZXJJZH1gLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGpzb25EYXRhLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgc2V0VXNlcihyZXNwb25zZSk7XG4gIH0sIFt1c2VySWRdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRVc2VyRGF0YSgpO1xuICB9LCBbZ2V0VXNlckRhdGFdKTtcbiAgY29uc3QgcG9zdENvdW50ID0gdXNlcj8ucG9zdHMubGVuZ3RoO1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGJnLWJsYWNrIGJvcmRlci1ub25lIHJvdW5kZWQtbm9uZSByZWxhdGl2ZVwiPlxuICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBwdC01IHBiLTAgZ2FwLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyAgaC1bMTAwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAge3VzZXI/LnByb0ltZyA9PSBudWxsID8gKFxuICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJ3LTMvNCBoLTMvNFwiPlxuICAgICAgICAgICAgICA8QXZhdGFySW1hZ2Ugc3JjPVwiaHR0cHM6Ly9zdGF0aWMudmVjdGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvdGh1bWJuYWlscy8wMDkvMjkyLzI0NC9zbWFsbC9kZWZhdWx0LWF2YXRhci1pY29uLW9mLXNvY2lhbC1tZWRpYS11c2VyLXZlY3Rvci5qcGdcIiAvPlxuICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwidy1bNzdweF0gaC1bNzdweF1cIj5cbiAgICAgICAgICAgICAgPEF2YXRhckltYWdlIHNyYz17dXNlci5wcm9JbWd9IC8+XG4gICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHNwYWNlLXktM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xLzMgZm9udC1leHRyYWJvbGQgdGV4dC14bCBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIHt1c2VyPy51c2VybmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9sbG93QnV0dG9uIHVzZXJEYXRhPXt1c2VyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIDxDYXJkRGVzY3JpcHRpb24gY2xhc3NOYW1lPVwidy1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHQtNSBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2FucyBmb250LWJvbGQgdy01LzYgXCI+XG4gICAgICAgICAge3VzZXI/LmZ1bGxuYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHctNS82IGZvbnQtc2FucyBmb250LW1lZGl1bSBcIj5cbiAgICAgICAgICB7dXNlcj8uYmlvfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cImZsZXggdy1zY3JlZW4gYm9yZGVyIGJvcmRlci1ncmF5LTUwMCBib3JkZXItci0wIGJvcmRlci1sLTAganVzdGlmeS1jZW50ZXIgcHQtMyBwYi0zIG10LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHctMS8zIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGRcIj57dXNlcj8ucG9zdHMubGVuZ3RofTwvcD4gcG9zdHNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB3LTEvMyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkXCI+e3VzZXI/LmZvbGxvd2Vycy5sZW5ndGh9PC9wPntcIiBcIn1cbiAgICAgICAgICBmb2xsb3dlcnNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB3LTEvMyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkXCI+e3VzZXI/LmZvbGxvd2luZy5sZW5ndGh9PC9wPntcIiBcIn1cbiAgICAgICAgICBmb2xsb3dpbmdcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAge3Bvc3RDb3VudCA9PSAwID8gKFxuICAgICAgICA8ZGl2Pk5vIHBvc3QgeWV0PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJwLTAgZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAge3VzZXI/LnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMCB3LVszMyVdIG10LTFcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2AvcG9zdHMvb25lUG9zdC8ke3Bvc3QuX2lkfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5wb3N0SW1nfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNwZWN0LXNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICBhbHQ9e1wiRGVzY3JpcHRpb25cIn1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBmaXhlZCBib3R0b20tMCBsZWZ0LTAgYmctYmxhY2tcIj5cbiAgICAgICAgPEJvdHRvbU5hdiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiQXZhdGFySW1hZ2UiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsIkJvdHRvbU5hdiIsIkZvbGxvd0J1dHRvbiIsImp3dERlY29kZSIsIkltYWdlIiwiTGluayIsInVzZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYWdlIiwicGFyYW1zIiwidXNlcklkIiwidXNlciIsInNldFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJkZWNvZGVkVG9rZW4iLCJnZXRJdGVtIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZ2V0VXNlckRhdGEiLCJ0b2tlbiIsImpzb25EYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwb3N0Q291bnQiLCJwb3N0cyIsImxlbmd0aCIsImNsYXNzTmFtZSIsImRpdiIsInByb0ltZyIsInNyYyIsInVzZXJuYW1lIiwidXNlckRhdGEiLCJmdWxsbmFtZSIsImJpbyIsInAiLCJmb2xsb3dlcnMiLCJmb2xsb3dpbmciLCJtYXAiLCJwb3N0IiwiX2lkIiwicG9zdEltZyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/user/[userId]/page.tsx\n"));

/***/ })

});