import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Development of public websites, customized enterprise information systems, and applications."
          />
          <meta name="keywords" content="public websites, enterprise information systems, software development" />

          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon/logo192.png" />
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
