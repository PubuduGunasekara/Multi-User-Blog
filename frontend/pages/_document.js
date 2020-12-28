import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <React.Fragment>
        <Html lang="en">
          <Head>
            <link rel="shortcut icon" href="/static/images/favicon.ico" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Muli:wght@500&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
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
