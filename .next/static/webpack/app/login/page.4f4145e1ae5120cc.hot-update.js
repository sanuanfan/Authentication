"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst LoginPage = ()=>{\n    _s();\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_2___default().useState({\n        username: \"\",\n        password: \"\"\n    });\n    const onLogin = async ()=>{\n        console.log(\"User data are : \" + user.username, user.password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen w-screen \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[18%] h-auto bg-slate-500 rounded flex flex-col justify-center items-center p-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-[24px] text-neutral-800 font-bold mb-3\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[80%] \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"username\",\n                            className: \"text-neutral-800 text-[16px] mb-2\",\n                            children: \"Username\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"rounded p-2 border-gray-900 mb-3 text-slate-950\",\n                            type: \"text\",\n                            id: \"username\",\n                            value: user.username,\n                            onChange: (e)=>setUser({\n                                    ...user,\n                                    username: e.target.value\n                                }),\n                            placeholder: \"Username\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[80%] \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            className: \"text-neutral-800 text-[16px] mb-2\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"rounded p-2 border-gray-900 mb-3 text-slate-950\",\n                            type: \"password\",\n                            id: \"password\",\n                            value: user.password,\n                            onChange: (e)=>setUser({\n                                    ...user,\n                                    password: e.target.value\n                                }),\n                            placeholder: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-[30%] bg-orange-400 hover:bg-orange-500 transition-colors h-8\",\n                    onClick: onLogin,\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/signUp\",\n                    className: \"text-slate-950 hover:text-orange-500\",\n                    children: \"Go to SignUp page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\practice\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LoginPage, \"p+ut/tRnaLTZtosuuWuZtwuxv/E=\");\n_c = LoginPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNEI7QUFDZ0I7QUFJNUMsTUFBTUUsWUFBWTs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gscURBQWMsQ0FBQztRQUNuQ0ssVUFBVTtRQUNWQyxVQUFVO0lBQ2Q7SUFDQSxNQUFNQyxVQUFVO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJQLEtBQUtHLFFBQVEsRUFBRUgsS0FBS0ksUUFBUTtJQUNqRTtJQUNBLHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQThDOzs7Ozs7OEJBQzVELDhEQUFDRTs7Ozs7OEJBQ0QsOERBQUNIO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQU1DLFNBQVE7NEJBQVdKLFdBQVU7c0NBQW9DOzs7Ozs7c0NBQ3hFLDhEQUFDSzs0QkFDR0wsV0FBVTs0QkFDVk0sTUFBSzs0QkFDTEMsSUFBRzs0QkFDSEMsT0FBT2pCLEtBQUtHLFFBQVE7NEJBQ3BCZSxVQUFVLENBQUNDLElBQU1sQixRQUFRO29DQUFFLEdBQUdELElBQUk7b0NBQUVHLFVBQVVnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQUM7NEJBQzdESSxhQUFZOzs7Ozs7Ozs7Ozs7OEJBR3BCLDhEQUFDYjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUFNQyxTQUFROzRCQUFXSixXQUFVO3NDQUFvQzs7Ozs7O3NDQUN4RSw4REFBQ0s7NEJBQ0dMLFdBQVU7NEJBQ1ZNLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hDLE9BQU9qQixLQUFLSSxRQUFROzRCQUNwQmMsVUFBVSxDQUFDQyxJQUFNbEIsUUFBUTtvQ0FBRSxHQUFHRCxJQUFJO29DQUFFSSxVQUFVZSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQUM7NEJBQzdESSxhQUFZOzs7Ozs7Ozs7Ozs7OEJBR3BCLDhEQUFDQztvQkFBT2IsV0FBVTtvQkFBa0VjLFNBQVNsQjs4QkFBUzs7Ozs7OzhCQUN0Ryw4REFBQ1Isa0RBQUlBO29CQUFDMkIsTUFBTTtvQkFBV2YsV0FBVTs4QkFBdUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhGO0dBeENNVjtLQUFBQTtBQTBDTixpRUFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIUFxcRGVza3RvcFxccHJhY3RpY2VcXHNyY1xcYXBwXFxsb2dpblxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9KVxyXG4gICAgY29uc3Qgb25Mb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZGF0YSBhcmUgOiBcIiArIHVzZXIudXNlcm5hbWUsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4gJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzE4JV0gaC1hdXRvIGJnLXNsYXRlLTUwMCByb3VuZGVkIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LVsyNHB4XSB0ZXh0LW5ldXRyYWwtODAwIGZvbnQtYm9sZCBtYi0zJz5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs4MCVdICc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT0ndGV4dC1uZXV0cmFsLTgwMCB0ZXh0LVsxNnB4XSBtYi0yJz5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZCBwLTIgYm9yZGVyLWdyYXktOTAwIG1iLTMgdGV4dC1zbGF0ZS05NTAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3VzZXJuYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlci51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKHsgLi4udXNlciwgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzgwJV0gJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPSd0ZXh0LW5ldXRyYWwtODAwIHRleHQtWzE2cHhdIG1iLTInPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkIHAtMiBib3JkZXItZ3JheS05MDAgbWItMyB0ZXh0LXNsYXRlLTk1MCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlci5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKHsgLi4udXNlciwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3ctWzMwJV0gYmctb3JhbmdlLTQwMCBob3ZlcjpiZy1vcmFuZ2UtNTAwIHRyYW5zaXRpb24tY29sb3JzIGgtOCcgb25DbGljaz17b25Mb2dpbn0+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NpZ25VcFwifSBjbGFzc05hbWU9J3RleHQtc2xhdGUtOTUwIGhvdmVyOnRleHQtb3JhbmdlLTUwMCc+R28gdG8gU2lnblVwIHBhZ2U8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2VcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkxvZ2luUGFnZSIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwib25Mb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImhyIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});