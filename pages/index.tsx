import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import { GetServerSideProps } from 'next';
import PageHead from '../components/PageHead/PageHead';

import Layout from '../components/Layout/Layout';
import Accordion from '../components/Accordion/Accordion';

export default function HomePage() {
  const { t } = useTranslation('common');

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
        <h1>Выделенная команда для создания вашего продукта</h1>
        <Accordion />
        <Accordion />

        <h1>Выделенная команда для создания вашего продукта</h1>

        <section>
          <Accordion />

        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string)),
  },
});
