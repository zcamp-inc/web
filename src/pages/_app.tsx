import "../styles/globals.css";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../theme";
import "@fontsource/rubik";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import Router from "next/router";
import TopBarProgress from "react-topbar-progress-indicator";


function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = React.useState(false)
  Router.events.on("routeChangeStart", () => { setProgress(true) })
  Router.events.on("routeChangeComplete", () => { setProgress(false) })
  TopBarProgress.config({
    barColors: {
      "0": "#5E00AB",
      "1.0": "#57FFF5"
    }
  })

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
          {progress && <TopBarProgress />}
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    );
  }
}

export default  withUrqlClient(createUrqlClient) (MyApp);
