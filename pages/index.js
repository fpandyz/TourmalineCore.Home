import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PageHead from '../components/PageHead/PageHead';

import Home from '../partials/Home/Home';
import Layout from '../components/Layout/Layout';

export default function HomePage() {
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
        <Home />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
