import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';

import PageHead from '../components/PageHead/PageHead';
import Skills from '../components/Skills/Skills';
import LayoutHomePage from '../components/LayoutHomePage/LayoutHomePage';
import CompletedProjects from '../components/CompletedProjects/CompletedProjects';
import Services from '../components/Services/Services';
import Process from '../components/Process/Process';
import WorkStructure from '../components/WorkStructure/WorkStructure';
import Mistakes from '../components/Mistakes/Mistakes';
import AdaptationToProject from '../components/AdaptationToProject/AdaptationToProject';
import Tools from '../components/Tools/Tools';
import FormBlock from '../components/FormBlock/FormBlock';

import { NavigationLinks, navigationLinks } from '../utils/consts/navigation';

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

      <LayoutHomePage navigationLinks={navigationLinks}>
        <Services
          id={NavigationLinks.services}
          data-aos="fade-up"
        />
        <Skills
          id={NavigationLinks.skills}
          data-aos="fade-up"
        />
        <CompletedProjects
          id={NavigationLinks.experience}
          data-aos="fade-up"
        />

        <div
          id={NavigationLinks.approach}
        >
          <AdaptationToProject
            data-aos="fade-up"
          />
          <Process
            data-aos="fade-up"
          />
          <Tools
            data-aos="fade-up"
          />
          <WorkStructure
            data-aos="fade-up"
          />
          <Mistakes
            data-aos="fade-up"
          />
        </div>

        <FormBlock
          id={NavigationLinks.contact}
          data-aos="fade-up"
        />
      </LayoutHomePage>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'common',
      'articles',
      'footer',
      'heroBlockHomePage',
      'skills',
      'services',
      'completedProjects',
      'navigation',
      'workStructure',
      'mistakes',
      'adaptationToProject',
      'process',
      'tools',
      'form',
      'formBlock',
    ])),
  },
});
