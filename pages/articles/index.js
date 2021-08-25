import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import Articles from '../../partials/Articles/Articles';

import { fetchArticlesList } from '../../partials/Articles/fetchHelpers/fetchArticlesList';
import { fetchMetadata } from '../../partials/Articles/fetchHelpers/fetchMetadata';

export default function ArticlesPage({
  articles,
}) {
  const { t } = useTranslation('articles', { useSuspense: false });

  return (
    <>
      <PageHead
        seoData={{
          seo: {
            title: t('title'),
            description: t('description'),
          },
          keywords: t('keywords'),
          metaTags: [],
          structuredData: '',
          additionalCode: '',
        }}
      />

      <Layout>
        <Articles articles={articles} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const articles = await fetchArticlesList();

  const localeArticles = articles[locale];

  const currentArticles = await Promise.all(localeArticles.map(async (articleFolder) => {
    const files = articleFolder.children;
    const articleFilename = files.filter((file) => file.name !== 'metadata.json')[0].name;

    const metadata = await fetchMetadata(articleFilename, locale);

    return {
      ...articleFolder,
      metadata,
    };
  }));

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      articles: currentArticles,
    },
  };
}
