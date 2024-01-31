import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import Points from '../../components/Points/Points';
import Tasks from '../../components/Tasks/Tasks';
import Cases from '../../components/Cases/Cases';
import Cta from '../../components/Cta/Cta';

export default function DesignPage() {
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
      <Layout mainClassName="design__main">
        <div className="design__hero-block-container">
          <Points />
        </div>
        <Tasks />
        <Cases />
        <Cta />
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
      'payment',
      'cta',
      'cooperation',
      'cases',
      'pointsDesign',
      'tasksDesign',
    ])),
  },
});
