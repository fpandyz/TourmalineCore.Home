import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import AOS from 'aos';

import PageHead from '../components/PageHead/PageHead';

import useSectionAutoPaddings from '../common/hooks/useSectionAutoPaddings';
import useDeviceSize from '../common/hooks/useDeviceSize';
import { LayoutRedesign } from '../components/redesign/LayoutRedesign/LayoutRedesign';
import { HeroRedesign } from '../components/redesign/HeroRedesign/HeroRedesign';
import { ServicesRedesign } from '../components/redesign/ServicesRedesign/ServicesRedesign';
import { ProjectsWithTextBlockRedesign } from '../components/redesign/ProjectsWithTextBlockRedesign/ProjectsWithTextBlockRedesign';
import { ProjectsRedesign } from '../components/redesign/ProjectsRedesign/ProjectsRedesign';
import { TextSurroundedByImagesRedesign } from '../components/redesign/TextSurroundedByImagesRedesign/TextSurroundedByImagesRedesign';
import { SignpostMultipleRedesign } from '../components/redesign/SignpostMultipleRedesign/SignpostMultipleRedesign';

export default function HomePage() {
  const { t } = useTranslation('common');

  // in order for the hook to automatically add indents you must use the tag "section" with the attribute "data-auto-padding={id}"
  useSectionAutoPaddings();

  const deviceSize = useDeviceSize();
  const [clickedAccordion, setClickedAccordion] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, [deviceSize.width, clickedAccordion]);

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

      <LayoutRedesign>
        <HeroRedesign />
        <ServicesRedesign />
        <ProjectsWithTextBlockRedesign translationKey="projectsRedesignFirstSection" />
        <ProjectsRedesign translationKey="projectsRedesignSecondarySection" />
        <ProjectsRedesign translationKey="projectsRedesignThirdSection" />
        <ProjectsRedesign translationKey="projectsRedesignFourthSection" />
        <ProjectsWithTextBlockRedesign translationKey="projectsRedesignFifthSection" />
        <TextSurroundedByImagesRedesign />
        <SignpostMultipleRedesign translationKey="conferenceSignpostsRedesign" />
        <SignpostMultipleRedesign translationKey="articleSignpostsRedesign" />
      </LayoutRedesign>

      {/* <LayoutHomePage
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
          clickedAccordion={() => setClickedAccordion(!clickedAccordion)}
        /> */}

      {/* <section
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
      </section> */}

      {/* <div
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
      </div> */}

      {/* <FormBlock
        id={NavigationLinks.contact}
        animationName="fade-up"
        data-auto-padding="form-block"
      /> */}

      {/* </LayoutHomePage> */}
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'common',
      'cookie',
      'footer',
      'heroRedesign',
      'servicesRedesign',
      'projectsRedesignFirstSection',
      'projectsRedesignSecondarySection',
      'projectsRedesignThirdSection',
      'projectsRedesignFourthSection',
      'projectsRedesignFifthSection',
      'textSurroundedByImagesRedesign',
      'conferenceSignpostsRedesign',
      'articleSignpostsRedesign',

      // 'articles',
      // 'heroBlockHomePage',
      // 'skills',
      // 'services',
      // 'completedProjects',
      // 'navigation',
      // 'workStructure',
      // 'mistakes',
      // 'adaptationToProject',
      // 'process',
      // 'tools',
      // 'form',
      // 'formBlock',
      // 'discussion',
    ])),
  },
});
