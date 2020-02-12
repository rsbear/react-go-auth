import * as React from "react";
import NextApp from "next/app";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import { globalStyles } from "../styles/main";
import { useUsersQuery } from "../generated/graphql";
import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "../lib/apollo";

// const AppFunction = ({ Component, pageProps }) => {
//   const { loading, error, data } = useUsersQuery({
//     fetchPolicy: "cache-first"
//   });
//   return (
//     <>
//       <Component
//         authUser={!loading && !error && data ? data.me : null}
//         {...pageProps}
//       />
//     </>
//   );
// };

class App extends NextApp<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <CacheProvider value={cache}>
          {globalStyles}
          <Component {...pageProps} />
        </CacheProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(App);
