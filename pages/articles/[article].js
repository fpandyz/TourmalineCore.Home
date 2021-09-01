import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import Article from '../../partials/Articles/Article/Article';

import { fetchArticle } from '../../partials/Articles/fetchHelpers/fetchArticle';
import { fetchMetadata } from '../../partials/Articles/fetchHelpers/fetchMetadata';
import { fetchArticlesListWithMeta } from '../../partials/Articles/fetchHelpers/fetchArticlesListWithMeta';

export default function ArticlesPage({
  article,
  metadata,
}) {
  return (
    <>
      <PageHead
        seoData={{
          seo: {
            title: metadata.title,
            description: metadata.description,
          },
          keywords: metadata.keywords || '',
          metaTags: [],
          structuredData: '',
          additionalCode: '',
        }}
      />

      <Layout>
        <Article markdown={article} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const articles = await fetchArticlesListWithMeta();

  const paths = articles.map((articleItem) => ({
    params: { article: `${articleItem.name }.md` },
    locale: articleItem.locale,
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
  locale,
}) {
  const article = await fetchArticle(params.article, locale);
  const metadata = await fetchMetadata(params.article, locale);

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      article,
      metadata,
    },
  };
}
