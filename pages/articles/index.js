import PageHead from '../../components/PageHead/PageHead';
import Articles from '../../partials/Articles/Articles';

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
      <Articles />
    </>
  );
}
