import App from "next/app";
import Head from "next/head";
import { createContext } from "react";

import { Header } from "../components/Header/Header";

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

import '../styles/globals.css';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.attributes.favicon.data.attributes.url)} />
        <link rel="stylesheet" href="https://use.typekit.net/wzt1kkc.css" />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Header />
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  // We don't use GraphQL here because by design we cannot pass _all_ global attributes down as context.
  // With that, we'll maintain use of a normal JS fetch call here, and pass the options needed for the favicon.
  const globalRes = await fetchAPI('/global', {
    populate: {
      favicon: "*",
    },
  });

  return { ...appProps, pageProps: { global: globalRes.data } }
};

export default MyApp;
