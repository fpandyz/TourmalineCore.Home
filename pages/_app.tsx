import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import 'gitalk/dist/gitalk.css';
import '../styles/main.scss';

import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';
import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      delay: 50,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  });

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
