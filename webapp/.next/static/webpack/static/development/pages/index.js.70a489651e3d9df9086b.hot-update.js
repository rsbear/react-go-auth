webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login */ "./components/login.tsx");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/signup */ "./components/signup.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");

var _jsxFileName = "/Users/rsbear/dev/dockertest/webapp/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Landing = function Landing() {
  var _useUsersQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["useUsersQuery"])(),
      _useUsersQuery2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useUsersQuery, 3),
      loading = _useUsersQuery2[0],
      error = _useUsersQuery2[1],
      data = _useUsersQuery2[2];

  var signupComponent = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return __jsx(_components_signup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }, []);
  var loginComponent = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return __jsx(_components_login__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }, []);

  if (loading) {
    return __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "loading...");
  }

  if (error) {
    console.log(error);
    return __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "oops something went wrong");
  }

  if (data) {
    console.log(data);
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " Welcome friends"), signupComponent, loginComponent);
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ })

})
//# sourceMappingURL=index.js.70a489651e3d9df9086b.hot-update.js.map