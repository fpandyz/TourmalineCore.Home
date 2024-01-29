import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import HeroBlockTechnology from '../../components/HeroBlockTechnology/HeroBlockTechnology';
import Points from '../../components/Points/Points';
import Tasks from '../../components/Tasks/Tasks';
import Cases from '../../components/Cases/Cases';
import Cta from '../../components/Cta/Cta';
import Stack from '../../components/Stack/Stack';
import Payment from '../../components/Payment/Payment';
import Cooperation from '../../components/Cooperation/Cooperation';
import ServicesTechnology from '../../components/ServicesTechnology/ServicesTechnology';
import FormBlock from '../../components/FormBlock/FormBlock';

export default function FrontendPage() {
  return (
    <>
      {/* TODO add translate */}
      <PageHead
        seoData={{
          seo: {
            title: 'Tourmaline Core | Frontend',
            description: 'Description',
          },
          keywords: 'разработка, корпоративные информационные системы, публичные сайты',
          metaTags: [],
          structuredData: '',
          additionalCode: '',
        }}
      />
      <Layout mainClassName="frontend__main">
        <div className="frontend__hero-block-container">
          <HeroBlockTechnology />
          <Points />
        </div>
        <Tasks />
        <Cases />
        <Cta />
        <Stack />
        <Payment />
        <Cooperation />
        <ServicesTechnology />
        <FormBlock buttonClassName="frontend__form-button" />
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
      'discussion',
      'form',
      'formBlock',
      'heroFrontend',
      'pointsFrontend',
      'tasksFrontend',
      'payment',
      'cta',
      'stackFrontend',
      'cooperation',
      'servicesTechnologyFrontend',
      'cases',
    ])),
  },
});
