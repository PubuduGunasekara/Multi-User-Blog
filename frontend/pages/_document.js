import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ height: "100%" }}>
        <Head>
          <link rel="shortcut icon" href="/static/images/favicon.ico" />
          <meta charSet="UTF-8" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Muli:wght@500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
