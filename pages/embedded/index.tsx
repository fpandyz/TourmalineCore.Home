import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import HeroBlockTechnology from '../../components/HeroBlockTechnology/HeroBlockTechnology';
import Points from '../../components/Points/Points';
import Tasks from '../../components/Tasks/Tasks';
import Cases from '../../components/Cases/Cases';
import Cta from '../../components/Cta/Cta';
import Stack from '../../components/Stack/Stack';

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
      <Layout mainClassName="embedded__main">
        <div className="embedded__hero-block-container">
          <HeroBlockTechnology />
          <Points />
          <Tasks />
          <Cases />
          <Cta />
          <Stack />
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
