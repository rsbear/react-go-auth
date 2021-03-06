webpackHotUpdate("static/development/pages/index.js",{

/***/ "./generated/graphql.tsx":
/*!*******************************!*\
  !*** ./generated/graphql.tsx ***!
  \*******************************/
/*! exports provided: AuthsDocument, useAuthsQuery, useAuthsLazyQuery, SignupDocument, useSignupMutation, UsersDocument, useUsersQuery, useUsersLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthsDocument", function() { return AuthsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthsQuery", function() { return useAuthsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthsLazyQuery", function() { return useAuthsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupDocument", function() { return SignupDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSignupMutation", function() { return useSignupMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDocument", function() { return UsersDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUsersQuery", function() { return useUsersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUsersLazyQuery", function() { return useUsersLazyQuery; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Users {\n  users {\n    email\n    username\n  }\n}\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation Signup($input: NewUser!) {\n  signup(input: $input) {\n    username\n    email\n  }\n}\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Auths {\n  auths {\n    email\n    secret\n  }\n}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var AuthsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
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
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"](AuthsDocument, baseOptions);
}
function useAuthsLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"](AuthsDocument, baseOptions);
}
var SignupDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());

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
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"](SignupDocument, baseOptions);
}
var UsersDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
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
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"](UsersDocument, baseOptions);
}
function useUsersLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"](UsersDocument, baseOptions);
}

/***/ })

})
//# sourceMappingURL=index.js.d6bc66fc814ff8edaa62.hot-update.js.map