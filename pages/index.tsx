import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { PageHead } from '../components/PageHead/PageHead';
import { LayoutRedesign } from '../components/redesign/LayoutRedesign/LayoutRedesign';
import { HeroRedesign } from '../components/redesign/HeroRedesign/HeroRedesign';
import { CollageWithTitleRedesign } from '../components/redesign/CollageWithTitleRedesign/CollageWithTitleRedesign';
import { CardsGridRedesign } from '../components/redesign/CardsGridRedesign/CardsGridRedesign';
import { SignpostMultipleRedesign } from '../components/redesign/SignpostMultipleRedesign/SignpostMultipleRedesign';
import { SingleImageRedesign } from '../components/redesign/SingleImageRedesign/SingleImageRedesign';
import { ProjectsRedesign } from '../components/redesign/ProjectsRedesign/ProjectsRedesign';
import { ProjectsWithTextBlockRedesign } from '../components/redesign/ProjectsWithTextBlockRedesign/ProjectsWithTextBlockRedesign';
import { CollageWithLinkRedesign } from '../components/redesign/CollageWithLinkRedesign/CollageWithLinkRedesign';
import { ServicesRedesign } from '../components/redesign/ServicesRedesign/ServicesRedesign';
import { useDeviceSize } from '../common/hooks';

export default function HomePage() {
  const {
    t,
  } = useTranslation(`common`);

  const {
    isTablet,
  } = useDeviceSize();

  return (
    <>
      <PageHead
        seoData={{
          seo: {
            title: t(`title`),
            description: t(`description`),
          },
          keywords: t(`keywords`),
          metaTags: [],
          structuredData: ``,
          additionalCode: ``,
        }}
      />

      <LayoutRedesign>
        <HeroRedesign />
        <ServicesRedesign targetId="services" />
        <ProjectsWithTextBlockRedesign
          targetId="projects"
          translationKey="projectsRedesignFirstSection"
          dataTestId="projects-with-text-block-first"
        />
        <ProjectsRedesign
          translationKey="projectsRedesignSecondarySection"
          dataTestId="projects-with-four-cards"
        />
        <ProjectsRedesign
          translationKey="projectsRedesignThirdSection"
          dataTestId="projects-with-three-cards"
        />
        {isTablet && <ProjectsRedesign translationKey="projectsRedesignFourthSection" />}
        {isTablet && <ProjectsWithTextBlockRedesign translationKey="projectsRedesignFifthSection" />}
        <CollageWithTitleRedesign />
        <SignpostMultipleRedesign
          translationKey="conferenceSignpostsRedesign"
        />
        <SingleImageRedesign />
        <SignpostMultipleRedesign
          translationKey="articleSignpostsRedesign"
          dataTestId="signpost-multiple-articles"
        />
        <CardsGridRedesign />
        <CollageWithLinkRedesign />
      </LayoutRedesign>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      `common`,
      `cookie`,
      `footerRedesign`,
      `discussion`,
      `heroRedesign`,
      `servicesRedesign`,
      `projectsRedesignFirstSection`,
      `projectsRedesignSecondarySection`,
      `projectsRedesignThirdSection`,
      `projectsRedesignFourthSection`,
      `projectsRedesignFifthSection`,
      `cardsGridRedesign`,
      `collageWithTitleRedesign`,
      `collageWithLinkRedesign`,
      `conferenceSignpostsRedesign`,
      `articleSignpostsRedesign`,
      `singleImageRedesign`,
    ])),
  },
});
