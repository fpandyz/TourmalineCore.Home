import PageHead from '../components/PageHead/PageHead';

import Home from '../partials/Home/Home';

export default function HomePage() {
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
      <Home />
    </>
  );
}
