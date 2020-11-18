import "../styles/global.css";
import Head from "next/head";
import HeaderComponent from "../components/HeaderComponents/Header";
import FooterComponent from "../components/Footer";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </React.Fragment>
  );
}

export default MyApp;
