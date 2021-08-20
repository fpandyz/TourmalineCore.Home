import Head from 'next/head';

import { getMetaLangLinks } from './getMetaLangLinks';

export default function PageHead({ seoData }) {
  const {
    seo: {
      title,
      description,
    },
    structuredData,
    // additionalCode,
    keywords,
    metaTags,
  } = seoData;

  const keywordsString = keywords.map((keyword) => keyword.value).join();

  return (
    <Head>
      <meta charSet="utf-8" />

      {createMetaTags(metaTags)}

      {getMetaLangLinks()}

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );

  function createMetaTags(tags) {
    return tags.map((element) => {
      const props = {};

      if (element.name) {
        props.name = element.name;
      }

      if (element.property) {
        props.property = element.property;
      }

      if (element.itemProp) {
        props.itemProp = element.itemProp;
      }

      if (element.content) {
        props.content = element.content;
      }

      return <meta key={element.name || element.property} {...props} />;
    });
  }
}
