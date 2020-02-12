import React from "react";
import Head from "next/head";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { createUploadLink } from "apollo-upload-client";
import jwtDecode from "jwt-decode";
import { getAccessToken, setAccessToken } from "./accessToken";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import cookie from "cookie";

const isServer = () => typeof window === "undefined";

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent: any, { ssr = true } = {}) {
  const WithApollo = ({
    apolloClient,
    serverAccessToken,
    apolloState,
    ...pageProps
  }: any) => {
    // if (!isServer() && !getAccessToken()) {
    //   setAccessToken(serverAccessToken);
    // }
    const client = apolloClient || initApolloClient(apolloState);
    return <PageComponent {...pageProps} apolloClient={client} />;
  };

  let fakevar = "";
  if (fakevar !== "production") {
    // Find correct display name
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    // Warn if old way of installing apollo is used
    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }

    // Set correct display name for devtools
    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: any) => {
      const {
        AppTree,
        ctx: { req, res }
      } = ctx;

      let serverAccessToken = "";

      // if (isServer()) {
      //   const cookies = cookie.parse(
      //     req.headers.cookie ? req.headers.cookie : ""
      //   );
      //   if (cookies.rfs) {
      //     const response = await fetch("http://localhost:8080/refresh_token", {
      //       method: "POST",
      //       credentials: "include",
      //       headers: {
      //         cookie: "rfs=" + cookies.rfs
      //       }
      //     });
      //     const data = await response.json();
      //     serverAccessToken = data.accessToken;
      //   }
      // }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apolloClient = (ctx.ctx.apolloClient = initApolloClient(
        {},
        serverAccessToken
      ));

      const pageProps = PageComponent.getInitialProps
        ? await PageComponent.getInitialProps(ctx)
        : {};

      // Only on the server
      if (typeof window === "undefined") {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (res && res.finished) {
          return {};
        }

        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import("@apollo/react-ssr");
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient
                }}
                apolloClient={apolloClient}
              />
            );
          } catch (error) {
            console.error("Error while running `getDataFromTree`", error);
          }
        }

        Head.rewind();
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
        serverAccessToken
      };
    };
  }

  return WithApollo;
}

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

function initApolloClient(initState: any, serverAccessToken?: string) {
  if (isServer()) {
    return createApolloClient(initState, serverAccessToken);
  }

  if (!apolloClient) {
    apolloClient = createApolloClient(initState);
  }

  return apolloClient;
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} config
 */
function createApolloClient(initialState = {}, serverAccessToken?: string) {
  const httpLink = new HttpLink({
    uri: "http://localhost:8080/graphql",
    credentials: "include",
    fetch
  });
  // const uploadLink = createUploadLink({
  //   uri: "http://localhost:8080/graphql",
  //   credentials: "include",
  //   fetch
  //   // fetchOptions
  // });

  // const refreshLink = new TokenRefreshLink({
  //   accessTokenField: "accessToken",
  //   isTokenValidOrUndefined: () => {
  //     const token = getAccessToken();

  //     if (!token) {
  //       return true;
  //     }

  //     try {
  //       const { exp } = jwtDecode(token);
  //       if (Date.now() >= exp * 1000) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     } catch {
  //       return false;
  //     }
  //   },
  //   fetchAccessToken: () => {
  //     return fetch("http://localhost:8080/refresh_token", {
  //       method: "POST",
  //       credentials: "include"
  //     });
  //   },
  //   handleFetch: accessToken => {
  //     setAccessToken(accessToken);
  //   },
  //   handleError: err => {
  //     console.warn("Your refresh token is invalid. Try to relogin");
  //     console.error(err);
  //   }
  // });

  // const authLink = setContext((_request, { headers }) => {
  //   const token = isServer() ? serverAccessToken : getAccessToken();
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: token ? `bearer ${token}` : ""
  //     }
  //   };
  // });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    console.log(graphQLErrors);
    console.log(networkError);
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined", // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([
      // refreshLink,
      // authLink,
      errorLink,
      httpLink
      // uploadLink
    ]),
    cache: new InMemoryCache().restore(initialState)
  });
}
