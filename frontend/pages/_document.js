import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <React.Fragment>
        <Html lang="en">
          <Head>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/static/images/favicons/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/images/favicons/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/images/favicons/favicon-16x16.png"
            />
            <link
              rel="manifest"
              href="/static/images/favicons/site.webmanifest"
            />
            <link
              rel="mask-icon"
              href="/static/images/favicons/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <link
              rel="shortcut icon"
              href="/static/images/favicons/favicon.ico"
            />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta
              name="msapplication-TileImage"
              content="/static/images/favicons/mstile-144x144.png"
            />
            <meta
              name="msapplication-config"
              content="/static/images/favicons/browserconfig.xml"
            />
            <meta name="theme-color" content="#ffffff" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            {/* <link
              rel="preconnect"
              href="https://www.google-analytics.com"
              crossorigin
            />
            <link
              rel="preconnect"
              href="https://connect.facebook.net"
              crossorigin
            />
            */}
            <link
              rel="preconnect"
              href="https://fonts.googleapis.com"
              crossOrigin
            />
            <link
              rel="preconnect"
              href="https://cdnjs.cloudflare.com"
              crossOrigin
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Muli:wght@500&display=swap"
              rel="preload"
              as="style"
            />
            <link
              rel="preload"
              as="style"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </React.Fragment>
    );
  }
}

export default MyDocument;
