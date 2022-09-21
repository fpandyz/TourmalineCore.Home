import Document, {
  Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps,
} from 'next/document';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useRef } from 'react';
import useScroll from '../common/hooks/useTest';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    const isProduction = process.env.NODE_ENV === 'production';

    // const refd = useRef<HTMLBodyElement>(null);

    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />

          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon/logo192.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Montserrat:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />

          <link rel="preconnect" href="https://mc.yandex.ru" />

          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

          <link type="text/css" href="path/to/OverlayScrollbars.css" rel="stylesheet" />

          <script type="text/javascript" src="path/to/OverlayScrollbars.js" />

        </Head>

        <OverlayScrollbarsComponent
          className="os-theme-dark"
          options={{
            scrollbars: {
              autoHide: 'scroll',
            },
            nativeScrollbarsOverlaid: {
              showNativeScrollbars: true,
            },
          }}
        >
          <body>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-171018032-1" />
            <script
            // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `<!-- Global site tag (gtag.js) - Google Analytics -->

            if (${isProduction}) {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-171018032-1');
            }`,
              }}
            />

            <Main />
            <NextScript />

            <script
              type="text/javascript"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
            if (${isProduction}) {
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              var z = null;m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(89913543, "init", {
                    clickmap: true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              })
            }
            `,
              }}
            />
            <noscript><div><img src="https://mc.yandex.ru/watch/89913543" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div></noscript>
          </body>
        </OverlayScrollbarsComponent>
      </Html>
    );
  }
}

export default MyDocument;
