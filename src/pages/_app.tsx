import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../theme";
import "@fontsource/karla";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>zcamp.inc</title>
      </Head>

      <ChakraProvider theme={theme}>
  
        <Component {...pageProps} />
  
      </ChakraProvider>
    </>
  );
}

export default MyApp;
