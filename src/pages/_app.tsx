import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../theme";
import "@fontsource/rubik";
import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { cacheExchange, QueryInput, Cache } from "@urql/exchange-graphcache";
import { LoginMutation, MeDocument, MeQuery, RegisterMutation, UserResponse } from "../generated/graphql";

function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
){
  return cache.updateQuery(qi, data => fn(result, data as any) as any)
}

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          login: (_result, args, cache, info) => {
            betterUpdateQuery<LoginMutation, MeQuery >(
              cache, 
              { query: MeDocument },
              _result,
              (result, query ) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.user,
                  };
                }
              }
            )
          },

          register: (_result, args, cache, info) => {
            betterUpdateQuery<RegisterMutation, MeQuery>(
              cache, 
              { query: MeDocument },
              _result,
              (result, query ) => {
                if (result.register.errors) {
                  return query;
                } else {
                  return {
                    me: result.register.user,
                  };
                }
              }
            )
          }
        }
      }
    }), fetchExchange
  ]
});

function MyApp({ Component, pageProps }: AppProps) {
  // To fix Nextjs - React 18 Hydration issue
  const [showChild, setShowChild] = React.useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider value={client}>
        <Head>
          <link rel="shortcut icon" href="/refavv.svg" />
          <title>zcamp web</title>
        </Head>

        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    );
  }
}

export default MyApp;
