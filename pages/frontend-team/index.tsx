import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import HeroBlockTechnology from '../../components/HeroBlockTechnology/HeroBlockTechnology';
import Points from '../../components/Points/Points';
import ServicesTechnology from '../../components/ServicesTechnology/ServicesTechnology';
import Tasks from '../../components/Tasks/Tasks';
import Stack from '../../components/Stack/Stack';
import Cases from '../../components/Cases/Cases';
import Stages from '../../components/Stages/Stages';
import FormBlock from '../../components/FormBlock/FormBlock';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';

export default function FrontendTeamPage() {
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
      <Layout mainClassName="frontend-team">
        <div className="frontend-team__hero-block-container">
          <HeroBlockTechnology />
          <Points />
        </div>
        <Tasks />
        <ServicesTechnology localeKeyName="benefits" isFilled />
        <Cases />
        <Stages />
        <Stack />
        <ServicesTechnology />
        <FormBlock
          id={TechnologyPageAnchorLink.Contact}
          buttonClassName="frontend-team__form-button"
        />
      </Layout>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'common',
      'footer',
      'cookie',
      'form',
      'formBlock',
      'discussion',
      'heroFrontend-team',
      'pointsFrontend-team',
      'servicesTechnologyFrontend-team',
      'benefitsFrontend-team',
      'tasksFrontend-team',
      'stackFrontend-team',
      'casesFrontend-team',
      'stagesFrontend-team',
    ])),
  },
});
