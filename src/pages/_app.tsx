import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../theme";
import "@fontsource/rubik";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp;
