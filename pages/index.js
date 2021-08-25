import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import PageHead from '../components/PageHead/PageHead';

import Home from '../partials/Home/Home';
import Layout from '../components/Layout/Layout';

export default function HomePage() {
  const { t } = useTranslation('common', { useSuspense: false });

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
