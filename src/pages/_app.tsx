import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../theme";
import "@fontsource/karla";
import "@fontsource/rubik";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain="zcamp-inc.us.auth0.com"
      clientId="kBckK2R7lscUT7c4xtTbBceeR6ZeObVz"
      redirectUri="http://localhost:3000"
    >
      <Head>
        <title>zcamp web</title>
      </Head>

      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Auth0Provider>
  );
}

export default MyApp;
