import PageHead from '../../components/PageHead/PageHead';
import Article from '../../partials/Articles/Article/Article';

export default function ArticlesPage() {
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
      <Article />
    </>
  );
}
