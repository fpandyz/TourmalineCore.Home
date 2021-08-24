import 'gitalk/dist/gitalk.css';
import '../styles/main.scss';

import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tourmaline Core</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
