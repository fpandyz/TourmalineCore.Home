import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageHead } from '../components/PageHead/PageHead';
import { LayoutRedesign } from '../components/redesign/LayoutRedesign/LayoutRedesign';
import { BlockRenderer } from '../components/BlockRenderer/BlockRenderer';
import { BlockType } from '../common/enums';
import { loadTranslations } from '../common/utils';
import { Block, LayoutData, SeoBlock } from '../common/types';
import { getLayoutData } from '../services/cms/api/layout-api';

type PageData = {
  seo: SeoBlock;
  blocks: Block[];
};

export default function HomePage({
  layoutData,
  pageData,
}: {
  layoutData: LayoutData;
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
            title: seo?.metaTitle,
            description: seo?.metaDescription,
          },
          keywords: seo?.metaKeywords,
          metaTags: [],
          structuredData: ` `,
          additionalCode: ``,
        }}
      />

      <LayoutRedesign
        headerContent={layoutData.headerContent}
        footerContent={layoutData.footerContent}
      >
        {blocks.map((block: Block) => (
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
  if (process.env.IS_STATIC_MODE) {
    const translationsPageData = await loadTranslations(locale, [
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
      `headerRedesign`,
      `footerRedesign`,
    ]);

    const mapStaticBlocksWithId = (blocks: Block[]) => blocks.map((block) => ({
      id: crypto.randomUUID(),
      ...block,
    }));

    const blocks = mapStaticBlocksWithId([
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
      // Todo: uncomment after fix form
      // {
      //   __component: BlockType.HOME_FORM_BLOCK,
      // },
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
    ]);

    return {
      props: {
        layoutData: {
          headerContent: translationsPageData.headerRedesign,
          footerContent: translationsPageData.footerRedesign,
        },
        pageData: {
          blocks,
          seo: {
            metaTitle: translationsPageData.common.metaTitle,
            metaDescription: translationsPageData.common.metaDescription,
            metaKeywords: translationsPageData.common.metaKeywords,
          },
        },
        ...(await serverSideTranslations(locale, [
          `common`,
          `cookie`,
          `formBlockRedesign`,
        ])),
      },
    };
  }

  const layoutData = await getLayoutData(locale);

  return {
    props: {
      layoutData,
      pageData: {
        blocks: [],
      },
      ...(await serverSideTranslations(locale, [
        `common`,
        `cookie`,
        `formBlockRedesign`,
      ])),
    },
  };
}
