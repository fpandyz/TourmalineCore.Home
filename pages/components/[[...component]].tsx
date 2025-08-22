import Link from "next/link";
import { useRouter } from "next/router";
import { CardsGridRedesign } from "../../components/redesign/CardsGridRedesign/CardsGridRedesign";
import { CollageWithLinkRedesign } from "../../components/redesign/CollageWithLinkRedesign/CollageWithLinkRedesign";
import { CollageWithTitleRedesign } from "../../components/redesign/CollageWithTitleRedesign/CollageWithTitleRedesign";
import { FooterRedesign } from "../../components/redesign/FooterRedesign/FooterRedesign";
import { HeroRedesign } from "../../components/redesign/HeroRedesign/HeroRedesign";
import { ProjectsRedesign } from "../../components/redesign/ProjectsRedesign/ProjectsRedesign";
import { ProjectsWithTextBlockRedesign } from "../../components/redesign/ProjectsWithTextBlockRedesign/ProjectsWithTextBlockRedesign";
import { ServicesRedesign } from "../../components/redesign/ServicesRedesign/ServicesRedesign";
import { SignpostMultipleRedesign } from "../../components/redesign/SignpostMultipleRedesign/SignpostMultipleRedesign";
import { SingleImageRedesign } from "../../components/redesign/SingleImageRedesign/SingleImageRedesign";
import { FormBlockRedesign } from "../../components/redesign/FormBlockRedesign/FormBlockRedesign";
import { ComponentName } from "../../common/enums";
import { Cookie } from "../../components/Cookie/Cookie";
import { CustomError } from "../../components/redesign/CustomError/CustomError";
import { FormModal } from "../../components/FormModal/FormModal";
import { getTranslationsFromFile } from "../../common/utils/getTranslationsFromFile";

export default function ComponentsPage({
  pageData,
}: {
  pageData: Record<string, any>;
}) {
  const {
    // cookie,
    cardsGridRedesign,
    collageWithLinkRedesign,
    collageWithTitleRedesign,
    // footerRedesign,
    heroRedesign,
    projectsRedesignFirstSection,
    projectsRedesignSecondarySection,
    projectsRedesignThirdSection,
    servicesRedesign,
    articleSignpostsRedesign,
    singleImageRedesign,
    formBlockRedesign,
    pageNotFound,
  } = pageData;

  const router = useRouter();
  const {
    query,
  } = router;

  const componentName = query.component?.[0];

  if (componentName === ComponentName.CARDS_GRID) {
    return (
      <CardsGridRedesign
        cardWithImage={cardsGridRedesign.cardWithImage}
        cardWithRepositories={cardsGridRedesign.cardWithRepositories}
        cardWithTextAndDate={cardsGridRedesign.cardWithTextAndDate}
      />
    );
  }

  if (componentName === ComponentName.COLLAGE_WITH_LINK) {
    return (
      <CollageWithLinkRedesign
        text={collageWithLinkRedesign.text}
        link={collageWithLinkRedesign.link}
        imageUrls={collageWithLinkRedesign.imageUrls}
      />
    );
  }

  if (componentName === ComponentName.COLLAGE_WITH_TITLE) {
    return (
      <CollageWithTitleRedesign
        title={collageWithTitleRedesign.title}
        imageUrls={collageWithTitleRedesign.imageUrls}
      />
    );
  }

  if (componentName === ComponentName.FOOTER) {
    return <FooterRedesign />;
  }

  if (componentName === ComponentName.HERO) {
    return (
      <HeroRedesign
        title={heroRedesign.title}
        description={heroRedesign.description}
        imageUrls={heroRedesign.imageUrls}
      />
    );
  }

  if (componentName === ComponentName.PROJECTS_WITH_FOUR_CARDS) {
    return (
      <ProjectsRedesign
        dataTestId="projects-with-four-cards"
        projectCardsWithImage={projectsRedesignSecondarySection.projectCardsWithImage}
      />
    );
  }

  if (componentName === ComponentName.PROJECTS_WITH_THREE_CARDS) {
    return (
      <ProjectsRedesign
        projectCardsWithImage={projectsRedesignThirdSection.projectCardsWithImage}
        dataTestId="projects-with-three-cards"
      />
    );
  }

  if (componentName === ComponentName.PROJECTS_WITH_TEXT_BLOCK) {
    return (
      <ProjectsWithTextBlockRedesign
        targetId="projects"
        dataTestId="projects-with-text-block-first"
        sectionTitle={projectsRedesignFirstSection.title}
        textBlockTitle={projectsRedesignFirstSection.textBlockTitle}
        projectCardsWithImage={projectsRedesignFirstSection.projectCardsWithImage}
        textBlockMarkdown={projectsRedesignFirstSection.textBlockMarkdown}
      />
    );
  }

  if (componentName === ComponentName.SERVICES) {
    return (
      <ServicesRedesign
        title={servicesRedesign.title}
        services={servicesRedesign.services}
        teamsCard={servicesRedesign.teamsCard}
        teams={servicesRedesign.teams}
      />
    );
  }

  if (componentName === ComponentName.SIGNPOST_MULTIPLE) {
    return (
      <SignpostMultipleRedesign
        title={articleSignpostsRedesign.title}
        viewAllLink={articleSignpostsRedesign.viewAllLink}
        viewAllLinkText={articleSignpostsRedesign.viewAllLinkText}
        signposts={articleSignpostsRedesign.signposts}
        dataTestId="signpost-multiple-articles"
      />
    );
  }

  if (componentName === ComponentName.SINGLE_IMAGE) {
    return (
      <SingleImageRedesign
        imageUrl={singleImageRedesign.imageUrl}
      />
    );
  }

  if (componentName === ComponentName.FORM_BLOCK) {
    return (
      <FormBlockRedesign
        asideText={formBlockRedesign.asideText}
        testId="form-block"
        isComponentPage

      />
    );
  }

  if (componentName === ComponentName.SUBMITTED_FORM_BLOCK) {
    return (
      <FormBlockRedesign
        asideText={formBlockRedesign.asideText}
        initializeIsSubmit
        testId="submitted-form-block"
        isComponentPage
      />
    );
  }

  if (componentName === ComponentName.COOKIE) {
    return (
      <Cookie isComponentPage />
    );
  }

  if (componentName === ComponentName.NOT_FOUND) {
    return (
      <CustomError
        statusCode={404}
        message={pageNotFound.message}
      />
    );
  }

  if (componentName === ComponentName.FORM_MODAL) {
    return (
      <FormModal
        asideText={formBlockRedesign.asideText}
        setIsOpen={() => {}}
        testId="form-modal"
        isComponentPage
      />
    );
  }

  if (componentName === ComponentName.SUBMITTED_FORM_MODAL) {
    return (
      <FormModal
        asideText={formBlockRedesign.asideText}
        setIsOpen={() => {}}
        testId="submitted-form-modal"
        initializeIsSubmit
        isComponentPage
      />
    );
  }

  return (
    <div className="components-page container-redesign">
      <h2 className="components-page__subtitle">
        Redesigned Homepage
      </h2>
      <ul className="components-page__list">
        <li className="components-page__item">
          <Link href={ComponentName.CARDS_GRID}>Cards grid</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.COLLAGE_WITH_LINK}>Collage with link</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.COLLAGE_WITH_TITLE}>Collage with title</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.FOOTER}>Footer</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.HERO}>Hero</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.PROJECTS_WITH_FOUR_CARDS}>Projects with four cards</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.PROJECTS_WITH_THREE_CARDS}>Projects with three cards</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.PROJECTS_WITH_TEXT_BLOCK}>Projects with text block</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.SERVICES}>Services</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.SIGNPOST_MULTIPLE}>Articles signpost</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.SINGLE_IMAGE}>Single image</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.FORM_BLOCK}>Form block</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.SUBMITTED_FORM_BLOCK}>Submitted form</Link>
        </li>
        <li className="components-page__item">

          <Link href={ComponentName.NOT_FOUND}>Not found</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.COOKIE}>Cookie</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.FORM_MODAL}>Form Modal</Link>
        </li>
        <li className="components-page__item">
          <Link href={ComponentName.SUBMITTED_FORM_MODAL}>Submitted Form Modal</Link>
        </li>
      </ul>
    </div>
  );
}

export async function getStaticProps({
  locale,
}: {
  locale: string;
}) {
  const translationsPageData = await getTranslationsFromFile(locale, [
    `cookie`,
    `cardsGridRedesign`,
    `collageWithLinkRedesign`,
    `collageWithTitleRedesign`,
    `footerRedesign`,
    `heroRedesign`,
    `projectsRedesignFirstSection`,
    `projectsRedesignSecondarySection`,
    `projectsRedesignThirdSection`,
    `servicesRedesign`,
    `articleSignpostsRedesign`,
    `singleImageRedesign`,
    `formBlockRedesign`,
    `pageNotFound`,
  ]);

  return {
    props: {
      pageData: translationsPageData,
    },
  };
}

export async function getStaticPaths() {
  const paths = Object.values(ComponentName)
    .map((component) => ({
      params: {
        component: [component],
      },
    }));

  const basePath = {
    params: {
      component: [],
    },
  };

  const locales = [`en`, `ru`];
  const localizedPaths = locales.flatMap((locale) => [basePath, ...paths].map((path) => ({
    params: path.params,
    locale,
  })));

  return {
    paths: localizedPaths,
    fallback: false,
  };
}
