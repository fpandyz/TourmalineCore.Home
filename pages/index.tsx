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

  const sectionPaddings = useAutoPaddings();

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
          style={{
            paddingBottom: `${sectionPaddings[0]}px`,
          }}
        />
        <Skills
          id={navigationLinks[1]}
          data-auto-padding={navigationLinks[1]}
          animationName="fade-up"
          style={{
            paddingTop: `${sectionPaddings[1]}px`,
            paddingBottom: `${sectionPaddings[1]}px`,
          }}
        />
        <CompletedProjects
          id={navigationLinks[2]}
          data-auto-padding={navigationLinks[2]}
          animationName="fade-up"
          style={{
            paddingTop: `${sectionPaddings[2]}px`,
            paddingBottom: `${sectionPaddings[2]}px`,
          }}
        />
        <AdaptationToProject
          id={navigationLinks[3]}
          data-auto-padding={navigationLinks[3]}
          animationName="fade-up"
          style={{
            paddingTop: `${sectionPaddings[3]}px`,
            paddingBottom: `${sectionPaddings[3]}px`,
          }}
        />
        <Process
          id={navigationLinks[4]}
          data-auto-padding={navigationLinks[4]}
          animationName="fade-up"
          style={{
            paddingTop: `${sectionPaddings[4]}px`,
            paddingBottom: `${sectionPaddings[4]}px`,
          }}
        />
        <Tools
          id={navigationLinks[5]}
          data-auto-padding={navigationLinks[5]}
          animationName="fade-up"
          style={{
            paddingTop: `${sectionPaddings[5]}px`,
            paddingBottom: `${sectionPaddings[5]}px`,
          }}
        />
        <WorkStructure
          id={navigationLinks[6]}
          data-auto-padding={navigationLinks[6]}
          animationName="fade-up"
          style={{
            paddingTop: `${sectionPaddings[6]}px`,
            paddingBottom: `${sectionPaddings[6]}px`,
          }}
        />
        <Mistakes
          id={navigationLinks[7]}
          animationName="fade-up"
          data-auto-padding={navigationLinks[7]}
          style={{
            paddingTop: `${sectionPaddings[7]}px`,
            paddingBottom: `${sectionPaddings[7]}px`,
          }}
        />
        <FormBlock
          id={navigationLinks[8]}
          data-auto-padding={navigationLinks[8]}
          animationName="fade-up"
          style={{
            paddingTop: `${sectionPaddings[8]}px`,
            paddingBottom: `${sectionPaddings[8]}px`,
          }}
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
