webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login */ "./components/login.tsx");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/signup */ "./components/signup.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
var _jsxFileName = "/Users/rsbear/dev/dockertest/webapp/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Landing = function Landing() {
  var _useUsersQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useUsersQuery"])(),
      loading = _useUsersQuery.loading,
      error = _useUsersQuery.error,
      data = _useUsersQuery.data;

  var signupComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_components_signup__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }, []);
  var loginComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_components_login__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " Welcome friends"), signupComponent, loginComponent, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, !loading && !error && data && data.users && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, data.users.map(function (u, i) {
    return __jsx("h2", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, u.username);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ })

})
//# sourceMappingURL=index.js.cc7493f2f535a09e75d3.hot-update.js.map