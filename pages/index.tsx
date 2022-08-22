import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';

import LayoutHomePage from '../components/LayoutHomePage/LayoutHomePage';
import PageHead from '../components/PageHead/PageHead';
import Services from '../components/Services/Services';
import Skills from '../components/Skills/Skills';
import CompletedProjects from '../components/CompletedProjects/CompletedProjects';
import Discussion from '../components/Discussion/Discussion';
import AdaptationToProject from '../components/AdaptationToProject/AdaptationToProject';
import Process from '../components/Process/Process';
import Tools from '../components/Tools/Tools';
import WorkStructure from '../components/WorkStructure/WorkStructure';
import Mistakes from '../components/Mistakes/Mistakes';
import FormBlock from '../components/FormBlock/FormBlock';

import { navigationLinks } from '../utils/consts/navigation';

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
          id={navigationLinks[0]}
          data-aos="fade-up"
        />
        <Skills
          id={navigationLinks[1]}
          data-aos="fade-up"
        />
        <CompletedProjects
          id={navigationLinks[2]}
          data-aos="fade-up"
        />
        <Discussion
          data-aos="fade-up"
        />
        <AdaptationToProject
          id={navigationLinks[3]}
          data-aos="fade-up"
        />
        <Process
          id={navigationLinks[4]}
          data-aos="fade-up"
        />
        <Tools
          id={navigationLinks[5]}
          data-aos="fade-up"
        />
        <WorkStructure
          id={navigationLinks[6]}
          data-aos="fade-up"
        />
        <Mistakes
          id={navigationLinks[7]}
          data-aos="fade-up"
        />
        <FormBlock
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
      'discussion',
    ])),
  },
});
