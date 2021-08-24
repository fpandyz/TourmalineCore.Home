import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import Articles from '../../partials/Articles/Articles';

import { fetchArticlesList } from '../../partials/Articles/fetchHelpers/fetchArticlesList';

export default function ArticlesPage({
  articles,
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
        <Articles articles={articles} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const articles = await fetchArticlesList();

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      articles,
    },
  };
}
