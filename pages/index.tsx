import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { Element } from 'react-scroll';

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

import { NavigationLinks, navigationLinks } from '../utils/consts/navigation';
import useAutoPaddings from '../common/hooks/useAutoPaddings';

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

      <LayoutHomePage
        navigationLinks={navigationLinks}
      >
        <Services
          id={NavigationLinks.services}
          data-auto-padding={NavigationLinks.services}
          animationName="fade-up"
        />

        <Skills
          id={NavigationLinks.skills}
          data-auto-padding={NavigationLinks.skills}
          animationName="fade-up"
        />

        <section
          id={NavigationLinks.experience}
          data-auto-padding={NavigationLinks.experience}
        >
          <Element name={`scroll-to-${NavigationLinks.experience}`}>
            <CompletedProjects
              animationName="fade-up"
            />

            <Discussion
              animationName="fade-up"
            />
          </Element>
        </section>

        <div
          id={NavigationLinks.approach}
        >
          <AdaptationToProject
            id={NavigationLinks.approach}
            animationName="fade-up"
            data-auto-padding="adaptation-project"
          />

          <Process
            animationName="fade-up"
            data-auto-padding="process"
          />
          <Tools
            animationName="fade-up"
            data-auto-padding="tools"
          />
          <WorkStructure
            animationName="fade-up"
            data-auto-padding="work-structure"
          />
          <Mistakes
            animationName="fade-up"
            data-auto-padding="mistakes"
          />
        </div>

        <FormBlock
          id={NavigationLinks.contact}
          animationName="fade-up"
          data-auto-padding="form-block"
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
