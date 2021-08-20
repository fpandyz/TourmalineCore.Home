import PageHead from '../../components/PageHead/PageHead';
import Articles from '../../partials/Articles/Articles';

import { fetchArticlesList } from '../../partials/Articles/fetchHelpers/fetchArticlesList';

export default function ArticlesPage({
  articles,
}) {
  return (
    <>
      <PageHead seoData={{
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
      <Articles articles={articles} />
    </>
  );
}

export async function getStaticProps() {
  const articles = await fetchArticlesList();

  return {
    props: {
      articles,
    },
  };
}
