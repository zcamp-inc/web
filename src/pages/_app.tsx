import "../styles/globals.css";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../theme";
import "@fontsource/rubik";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";


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
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="shortcut icon" href="/refavv.svg" />
          <title>zcamp web</title>
        </Head>

        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    );
  }
}

export default  withUrqlClient(createUrqlClient) (MyApp);
