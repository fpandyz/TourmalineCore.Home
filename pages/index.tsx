import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
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
        <Services id={navigationLinks[0]} />
        <Skills id={navigationLinks[1]} />
        <CompletedProjects id={navigationLinks[2]} />
        <Discussion id={navigationLinks[3]} />
        <AdaptationToProject id={navigationLinks[4]} />
        <Process id={navigationLinks[5]} />
        <Tools id={navigationLinks[6]} />
        <WorkStructure id={navigationLinks[7]} />
        <Mistakes id={navigationLinks[8]} />
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
      'heroBlock',
      'skills',
      'services',
      'completedProjects',
      'navigation',
      'workStructure',
      'mistakes',
      'adaptationToProject',
      'process',
      'tools',
      'discussion',
    ])),
  },
});
