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
          <meta charset="utf-8" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Development of public websites, customized enterprise information systems, and applications."
          />
          <link rel="apple-touch-icon" href="/favicon/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <title>Tourmaline Core</title>
          <meta name="keywords" content="public websites, enterprise information systems, software development" />
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
