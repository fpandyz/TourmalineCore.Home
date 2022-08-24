import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';

import PageHead from '../components/PageHead/PageHead';
import Skills from '../components/Skills/Skills';
import LayoutHomePage from '../components/LayoutHomePage/LayoutHomePage';
import CompletedProjects from '../components/CompletedProjects/CompletedProjects';
import Services from '../components/Services/Services';
import WorkStructure from '../components/WorkStructure/WorkStructure';
import Mistakes from '../components/Mistakes/Mistakes';
import FormBlock from '../components/FormBlock/FormBlock';

import { navigationLinks } from '../utils/consts/navigation';
import useAutoPaddings from '../common/hooks/useAutoPaddings';
import AdaptationToProject from '../components/AdaptationToProject/AdaptationToProject';
import Process from '../components/Process/Process';
import Tools from '../components/Tools/Tools';

export default function HomePage() {
  const { t } = useTranslation('common');

  // in order for the hook to automatically add indents you must use the tag "section" with the attribute "data-auto-padding={id}"
  useAutoPaddings();

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
          data-auto-padding={navigationLinks[0]}
          animationName="fade-up"
        />
        <Skills
          id={navigationLinks[1]}
          data-auto-padding={navigationLinks[1]}
          animationName="fade-up"
        />
        <CompletedProjects
          id={navigationLinks[2]}
          data-auto-padding={navigationLinks[2]}
          animationName="fade-up"
        />
        <AdaptationToProject
          id={navigationLinks[3]}
          data-auto-padding={navigationLinks[3]}
          animationName="fade-up"
        />
        <Process
          id={navigationLinks[4]}
          data-auto-padding={navigationLinks[4]}
          animationName="fade-up"
        />
        <Tools
          id={navigationLinks[5]}
          data-auto-padding={navigationLinks[5]}
          animationName="fade-up"
        />
        <WorkStructure
          id={navigationLinks[6]}
          data-auto-padding={navigationLinks[6]}
          animationName="fade-up"
        />
        <Mistakes
          id={navigationLinks[7]}
          animationName="fade-up"
          data-auto-padding={navigationLinks[7]}
        />
        <FormBlock
          id={navigationLinks[8]}
          data-auto-padding={navigationLinks[8]}
          animationName="fade-up"
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
