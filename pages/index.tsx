import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import { GetServerSideProps } from 'next';
import PageHead from '../components/PageHead/PageHead';
import LayoutHomePage from '../components/LayoutHomePage/LayoutHomePage';
import SomeComplitedProjects from '../components/SomeComplitedProjects/SomeComplitedProjects';

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

      <LayoutHomePage>
        <h1>Выделенная команда для создания вашего продукта</h1>
        <SomeComplitedProjects />
      </LayoutHomePage>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'articles', 'footer', 'heroBlock'])),
  },
});
