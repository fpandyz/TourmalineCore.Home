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
import Cooperation from '../../components/Cooperation/Cooperation';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';


export default function FrontendPage() {
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
      <Layout mainClassName="frontend-pelican-team">
      <div className="frontend-pelican-team__hero-block-container">
          <HeroBlockTechnology />
          <Points />
        </div>
        <ServicesTechnology />
        <Tasks />
        <Stack />
        <Cases />
        <Stages />
        <Cooperation />
        <FormBlock 
          id={TechnologyPageAnchorLink.Contact}
          buttonClassName="frontend-pelican-team__form-button"
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
      'heroBlockHomePage',
      'cookie',
      'form',
      'formBlock',
      'discussion',
      'cta',
      'cooperationFrontendPelicanTeam',
      'heroFrontendPelicanTeam',
      'pointsFrontendPelicanTeam',
      'tasksFrontendPelicanTeam',
      'stackFrontendPelicanTeam',
      'casesFrontendPelicanTeam',
      'stagesFrontendPelicanTeam',
      'servicesTechnologyTeams',
    ])),
  },
});
