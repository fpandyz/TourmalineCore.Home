import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';

export default function EmbeddedPage() {
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
      <Layout mainClassName="ml__main">
        <div className="ml__hero-block-container">
          {/* <HeroBlockTechnology /> */}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'common',
      'footer',
      'heroBlockHomePage',
      'cookie',
      'form',
      'formBlock',
      'discussion',
      'heroEmbedded',
      'pointsEmbedded',
      'tasksEmbedded',
      'payment',
      'cta',
      'stackEmbedded',
      'cooperation',
      'servicesTechnologyEmbedded',
      'casesEmbedded',
    ])),
  },
});