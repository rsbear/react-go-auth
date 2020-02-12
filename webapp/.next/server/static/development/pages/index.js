module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/login.tsx":
/*!******************************!*\
  !*** ./components/login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useForm */ "./hooks/useForm.ts");
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main */ "./styles/main.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
var _jsxFileName = "/Users/rsbear/dev/dockertest/webapp/components/login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const initialValues = {
  email: "",
  secret: ""
};

const Login = () => {
  const [values, handleChange] = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])(initialValues);
  const {
    0: tokenSent,
    1: setTokenSent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [createLoginAuth] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useCreateLoginAuthMutation"])();
  const [login] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useLoginMutation"])();

  async function handleGenerateAuth(values) {
    event.preventDefault();

    try {
      const res = await createLoginAuth({
        variables: {
          email: values.email
        }
      });
      console.log(res);
      setTokenSent(true);
    } catch (err) {//fail gracefully
    }
  }

  async function handleLogin(values) {
    event.preventDefault();
    console.log(` values ${values}`);

    try {
      const res = await login({
        variables: {
          secret: values.secret,
          email: "client@client.com"
        }
      });
      console.log(res);
    } catch (err) {// fail smooth
    }
  }

  return __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, " Login"), !tokenSent ? __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_2__["FlexForm"], {
    onSubmit: () => handleGenerateAuth(values),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    placeholder: "email",
    name: "email",
    value: values.email,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Get Token")) : __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_2__["FlexForm"], {
    onSubmit: () => handleLogin(values),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    placeholder: "magic word",
    name: "secret",
    value: values.secret,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "log in")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/signup.tsx":
/*!*******************************!*\
  !*** ./components/signup.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main */ "./styles/main.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
var _jsxFileName = "/Users/rsbear/dev/dockertest/webapp/components/signup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  email: "",
  username: ""
};

const reducer = (state, {
  field,
  value
}) => {
  return _objectSpread({}, state, {
    [field]: value
  });
};

const Signup = () => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  const [signup] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useSignupMutation"])();

  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value
    });
  }

  async function handleSubmit() {
    event.preventDefault();

    try {
      const res = await signup({
        variables: {
          input: {
            username: state.username,
            email: state.email
          }
        }
      });
      console.log(res);
    } catch (err) {//fail gracefully
    }
  }

  return __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Sign up"), __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_1__["FlexForm"], {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "email",
    value: state.email,
    placeholder: "Email",
    onChange: e => handleChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx(_styles_main__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "username",
    value: state.username,
    placeholder: "Username",
    onChange: e => handleChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Get Token")));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./generated/graphql.tsx":
/*!*******************************!*\
  !*** ./generated/graphql.tsx ***!
  \*******************************/
/*! exports provided: AuthsDocument, useAuthsQuery, useAuthsLazyQuery, CreateLoginAuthDocument, useCreateLoginAuthMutation, LoginDocument, useLoginMutation, SignupDocument, useSignupMutation, UsersDocument, useUsersQuery, useUsersLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthsDocument", function() { return AuthsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthsQuery", function() { return useAuthsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthsLazyQuery", function() { return useAuthsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLoginAuthDocument", function() { return CreateLoginAuthDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateLoginAuthMutation", function() { return useCreateLoginAuthMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupDocument", function() { return SignupDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSignupMutation", function() { return useSignupMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDocument", function() { return UsersDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUsersQuery", function() { return useUsersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUsersLazyQuery", function() { return useUsersLazyQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);


const AuthsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Auths {
  auths {
    email
    secret
  }
}
    `;
/**
 * __useAuthsQuery__
 *
 * To run a query within a React component, call `useAuthsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthsQuery({
 *   variables: {
 *   },
 * });
 */

function useAuthsQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](AuthsDocument, baseOptions);
}
function useAuthsLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](AuthsDocument, baseOptions);
}
const CreateLoginAuthDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation CreateLoginAuth($email: String!) {
  createLoginAuth(email: $email) {
    success
    message
  }
}
    `;

/**
 * __useCreateLoginAuthMutation__
 *
 * To run a mutation, you first call `useCreateLoginAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLoginAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLoginAuthMutation, { data, loading, error }] = useCreateLoginAuthMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
function useCreateLoginAuthMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](CreateLoginAuthDocument, baseOptions);
}
const LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Login($email: String!, $secret: String!) {
  login(email: $email, secret: $secret) {
    success
    message
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      secret: // value for 'secret'
 *   },
 * });
 */
function useLoginMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LoginDocument, baseOptions);
}
const SignupDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Signup($input: NewUser!) {
  signup(input: $input) {
    username
    email
  }
}
    `;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useSignupMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](SignupDocument, baseOptions);
}
const UsersDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Users {
  users {
    email
    username
  }
}
    `;
/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */

function useUsersQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](UsersDocument, baseOptions);
}
function useUsersLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](UsersDocument, baseOptions);
}

/***/ }),

/***/ "./hooks/useForm.ts":
/*!**************************!*\
  !*** ./hooks/useForm.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function (initialValues) {
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValues);

  const handleChange = e => {
    setValues(_objectSpread({}, values, {
      [e.target.name]: e.target.value
    }));
  };

  return [values, handleChange];
});

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login */ "./components/login.tsx");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/signup */ "./components/signup.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");
var _jsxFileName = "/Users/rsbear/dev/dockertest/webapp/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Landing = () => {
  const {
    loading,
    error,
    data
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_3__["useUsersQuery"])();
  const signupComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_components_signup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), []);
  const loginComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_components_login__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), []);

  if (loading) {
    return __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }, "loading...");
  }

  if (error) {
    console.log(error);
    return __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, "oops something went wrong");
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, " Welcome friends"), signupComponent, loginComponent, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, !loading && !error && data && data.users && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, data.users.map((u, i) => __jsx("h2", {
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, u.username)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./styles/main.tsx":
/*!*************************!*\
  !*** ./styles/main.tsx ***!
  \*************************/
/*! exports provided: globalStyles, flex, Wrapper, FlexForm, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStyles", function() { return globalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexForm", function() { return FlexForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/rsbear/dev/dockertest/webapp/styles/main.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/** @jsx jsx */

const globalStyles = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["Global"], {
  styles: _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
      html,
      body {
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
});
const row = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  flex-flow: row;
`;
const column = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  flex-direction: column;
`;
const flex = {
  row,
  column
};
const wrapStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  padding: 40px 80px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;
const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")`
  ${wrapStyles}
`;
const FlexForm = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.form`
  /* ${props => props.column && flex.column}
  ${props => props.row && flex.row} */
  ${flex.column}
`;
const inputBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  outline: 0;
  margin: 10px 0;
  padding: 10px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  input {
    padding: 0px;
    border: 0;
    height: 100%;
  }

  &:focus-within {
    box-shadow: 0px 0px 0px 2px rgba(20, 240, 160, 0.5);
    border: solid 1px rgba(20, 240, 160, 0.5);
  }
`;
const Input = props => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: [flex.row, inputBox],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })));
};

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rsbear/dev/dockertest/webapp/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map