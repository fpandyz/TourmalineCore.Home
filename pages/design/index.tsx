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
import Stages from '../../components/Stages/Stages';
import Stack from '../../components/Stack/Stack';
import Payment from '../../components/Payment/Payment';
import Cooperation from '../../components/Cooperation/Cooperation';
import ServicesTechnology from '../../components/ServicesTechnology/ServicesTechnology';

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
          <HeroBlockTechnology />
          <Points />
        </div>
        <Tasks />
        <Cases />
        <Cta />
        <Stages />
        <Stack />
        <Payment />
        <Cooperation />
        <ServicesTechnology />
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
      'heroDesign',
      'pointsDesign',
      'tasksDesign',
      'stagesDesign',
      'stackDesign',
      'servicesTechnologyDesign',
    ])),
  },
});
