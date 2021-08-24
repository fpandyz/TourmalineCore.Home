import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import Article from '../../partials/Articles/Article/Article';
import { fetchArticle } from '../../partials/Articles/fetchHelpers/fetchArticle';
import { fetchArticlesList } from '../../partials/Articles/fetchHelpers/fetchArticlesList';

export default function ArticlesPage({
  article,
}) {
  return (
    <>
      <PageHead
        seoData={{
          seo: {
            title: '',
            description: '',
          },
          keywords: [],
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
  const paths = [];

  const articles = await fetchArticlesList();

  Object.entries(articles).forEach(([locale, articleMeta]) => {
    articleMeta.forEach((articleItem) => {
      paths.push({ params: { article: `${articleItem.name }.md` }, locale });
    });
  });

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

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      article,
    },
  };
}
