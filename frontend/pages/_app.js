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
      {pageProps && Component ? (
        <Component {...pageProps} />
      ) : (
        <div
          style={{
            textAlign: "center",
            top: "50%",
            bottom: "50%",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            padding: "auto",
          }}
        >
          "Something went wrong. please try again later"
        </div>
      )}

      <FooterComponent />
    </React.Fragment>
  );
}

export default MyApp;
