webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/login.tsx":
/*!******************************!*\
  !*** ./components/login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useForm */ "./hooks/useForm.ts");
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main */ "./styles/main.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");


var _jsxFileName = "/Users/rsbear/dev/dockertest/webapp/components/login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var initialValues = {
  email: "",
  secret: ""
};

var Login = function Login() {
  var _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(initialValues),
      _useForm2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useForm, 2),
      values = _useForm2[0],
      handleChange = _useForm2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      tokenSent = _useState[0],
      setTokenSent = _useState[1];

  var _useCreateLoginAuthMu = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useCreateLoginAuthMutation"])(),
      _useCreateLoginAuthMu2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useCreateLoginAuthMu, 1),
      createLoginAuth = _useCreateLoginAuthMu2[0];

  var _useLoginMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useLoginMutation"])(),
      _useLoginMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useLoginMutation, 1),
      login = _useLoginMutation2[0];

  function handleGenerateAuth(values) {
    var res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleGenerateAuth$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(createLoginAuth({
              variables: {
                email: values.email
              }
            }));

          case 4:
            res = _context.sent;
            console.log(res);
            setTokenSent(true);
            _context.next = 11;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9]]);
  }

  function handleLogin(values) {
    var res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleLogin$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            event.preventDefault();
            console.log(" values ".concat(values));
            _context2.prev = 2;
            _context2.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(login({
              variables: {
                secret: values.secret,
                email: "client@client.com"
              }
            }));

          case 5:
            res = _context2.sent;
            console.log(res);
            _context2.next = 11;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[2, 9]]);
  }

  return __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, " Login"), !tokenSent ? __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_4__["FlexForm"], {
    onSubmit: function onSubmit() {
      return handleGenerateAuth(values);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    placeholder: "email",
    name: "email",
    value: values.email,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Get Token")) : __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_4__["FlexForm"], {
    onSubmit: function onSubmit() {
      return handleLogin(values);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    placeholder: "magic word",
    name: "secret",
    value: values.secret,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "log in")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=index.js.ea7070d15406a1377152.hot-update.js.map