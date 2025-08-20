import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageHead } from '../components/PageHead/PageHead';
import { LayoutRedesign } from '../components/redesign/LayoutRedesign/LayoutRedesign';
import { BlockRenderer, BlockTypes } from '../components/BlockRenderer/BlockRenderer';
import { getTranslationsFromFile } from '../common/utils/getTranslationsFromFile';

export default function HomePage({
  pageData,
}: {
  pageData: any;
}) {
  const {
    blocks,
    seo,
  } = pageData;

  // const {
  //   isTablet,
  // } = useDeviceSize();

  return (
    <>
      <PageHead
        seoData={{
          seo: {
            title: seo.title,
            description: seo.description,
          },
          keywords: seo.keywords,
          metaTags: [],
          structuredData: ``,
          additionalCode: ``,
        }}
      />

      <LayoutRedesign>

        {blocks?.map((block: any) => (
          <BlockRenderer
            key={block.id}
            block={block}
          />
        ))}
        {/* {isTablet && <ProjectsRedesign translationKey="projectsRedesignFourthSection" />}
        {isTablet && <ProjectsWithTextBlockRedesign translationKey="projectsRedesignFifthSection" />} */}
        {/* <FormBlockRedesign /> */}
        {/* <SignpostMultipleRedesign
          translationKey="conferenceSignpostsRedesign"
        />
        <SingleImageRedesign />
        <SignpostMultipleRedesign
          translationKey="articleSignpostsRedesign"
          dataTestId="signpost-multiple-articles"
        />
        <CardsGridRedesign />
        <CollageWithLinkRedesign /> */}
      </LayoutRedesign>
    </>
  );
}

export async function getServerSideProps({
  locale,
}: {
  locale: string;
}) {
  if (process.env.IS_STATIC_MODE === `true`) {
    const translationsPageData = await getTranslationsFromFile(locale, [
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
      `formBlockRedesign`,
    ]);

    return {
      props: {
        pageData: {
          blocks: [
            {
              __component: BlockTypes.HOME_HERO,
              ...translationsPageData.heroRedesign,
            },
            {
              __component: BlockTypes.HOME_SERVICES,
              ...translationsPageData.servicesRedesign,
            },
            {
              __component: BlockTypes.HOME_PROJECTS_WITH_TEXT_BLOCK,
              ...translationsPageData.projectsRedesignFirstSection,
            },
            {
              __component: BlockTypes.HOME_PROJECTS,
              ...translationsPageData.projectsRedesignSecondarySection,
            },
            {
              __component: BlockTypes.HOME_PROJECTS,
              ...translationsPageData.projectsRedesignThirdSection,
            },
            {
              __component: BlockTypes.HOME_COLLAGE_WITH_TITLE,
              ...translationsPageData.collageWithTitleRedesign,
            },
          ],
          seo: {
            title: translationsPageData.common.title,
            description: translationsPageData.common.description,
            keywords: translationsPageData.common.keywords,
          },
        },
        ...(await serverSideTranslations(locale, [
          `common`,
          `cookie`,
          `footerRedesign`,
          `discussion`,
          // `heroRedesign`,
          // `servicesRedesign`,
          // `projectsRedesignFirstSection`,
          // `projectsRedesignSecondarySection`,
          // `projectsRedesignThirdSection`,
          `projectsRedesignFourthSection`,
          `projectsRedesignFifthSection`,
          `cardsGridRedesign`,
          // `collageWithTitleRedesign`,
          `collageWithLinkRedesign`,
          `conferenceSignpostsRedesign`,
          `articleSignpostsRedesign`,
          `singleImageRedesign`,
          `formBlockRedesign`,
        ])),
      },
    };
  }

  return {};
}
