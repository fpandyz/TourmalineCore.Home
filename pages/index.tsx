import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageHead } from '../components/PageHead/PageHead';
import { LayoutRedesign } from '../components/redesign/LayoutRedesign/LayoutRedesign';
import { BlockRenderer } from '../components/BlockRenderer/BlockRenderer';
import { getTranslationsFromFile } from '../common/utils/getTranslationsFromFile';
import { BlockType } from '../common/enums';

type PageData = {
  seo: {
    title:string;
    description: string;
    keywords: string;
  };
  blocks: any[];
};

export default function HomePage({
  pageData,
}: {
  pageData: PageData;
}) {
  const {
    blocks,
    seo,
  } = pageData;

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
      </LayoutRedesign>
    </>
  );
}

export async function getServerSideProps({
  locale,
}: {
  locale: string;
}) {
  const translationsPageData = await getTranslationsFromFile(locale, [
    `common`,
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
            __component: BlockType.HOME_HERO,
            ...translationsPageData.heroRedesign,
          },
          {
            __component: BlockType.HOME_SERVICES,
            ...translationsPageData.servicesRedesign,
          },
          {
            __component: BlockType.HOME_PROJECTS_WITH_TEXT_BLOCK,
            ...translationsPageData.projectsRedesignFirstSection,
          },
          {
            __component: BlockType.HOME_PROJECTS,
            ...translationsPageData.projectsRedesignSecondarySection,
          },
          {
            __component: BlockType.HOME_PROJECTS,
            ...translationsPageData.projectsRedesignThirdSection,
          },
          {
            __component: BlockType.HOME_PROJECTS,
            ...translationsPageData.projectsRedesignFourthSection,
          },
          {
            __component: BlockType.HOME_PROJECTS_WITH_TEXT_BLOCK,
            ...translationsPageData.projectsRedesignFifthSection,
          },
          {
            __component: BlockType.HOME_COLLAGE_WITH_TITLE,
            ...translationsPageData.collageWithTitleRedesign,
          },
          {
            __component: BlockType.HOME_SIGNPOST_MULTIPLE,
            ...translationsPageData.conferenceSignpostsRedesign,
          },
          {
            __component: BlockType.HOME_SINGLE_IMAGE,
            ...translationsPageData.singleImageRedesign,
          },
          {
            __component: BlockType.HOME_SIGNPOST_MULTIPLE,
            ...translationsPageData.articleSignpostsRedesign,
          },
          {
            __component: BlockType.HOME_CARDS_GRID,
            ...translationsPageData.cardsGridRedesign,
          },
          {
            __component: BlockType.HOME_COLLAGE_WITH_LINK,
            ...translationsPageData.collageWithLinkRedesign,
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
      ])),
    },
  };
}
