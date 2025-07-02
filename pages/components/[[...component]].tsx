import Link from "next/link";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { ComponentName } from "../../common/utils/enum";
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

export default function ComponentsPage() {
  const router = useRouter();
  const {
    query,
  } = router;

  const componentName = query.component?.[0];

  if (componentName === ComponentName.CARDS_GRID) {
    return <CardsGridRedesign />;
  }

  if (componentName === ComponentName.COLLAGE_WITH_LINK) {
    return <CollageWithLinkRedesign />;
  }

  if (componentName === ComponentName.COLLAGE_WITH_TITLE) {
    return <CollageWithTitleRedesign />;
  }

  if (componentName === ComponentName.FOOTER) {
    return <FooterRedesign />;
  }

  if (componentName === ComponentName.HERO) {
    return <HeroRedesign />;
  }

  if (componentName === ComponentName.PROJECTS_WITH_FOUR_CARDS) {
    return (
      <ProjectsRedesign
        translationKey="projectsRedesignSecondarySection"
        dataTestId="projects-with-four-cards"
      />
    );
  }

  if (componentName === ComponentName.PROJECTS_WITH_THREE_CARDS) {
    return (
      <ProjectsRedesign
        translationKey="projectsRedesignThirdSection"
        dataTestId="projects-with-three-cards"
      />
    );
  }

  if (componentName === ComponentName.PROJECTS_WITH_TEXT_BLOCK) {
    return (
      <ProjectsWithTextBlockRedesign
        targetId="projects"
        translationKey="projectsRedesignFirstSection"
        dataTestId="projects-with-text-block-first"
      />
    );
  }

  if (componentName === ComponentName.SERVICES) {
    return (
      <ServicesRedesign />
    );
  }

  if (componentName === ComponentName.SIGNPOST_MULTIPLE) {
    return (
      <SignpostMultipleRedesign
        translationKey="articleSignpostsRedesign"
        dataTestId="signpost-multiple-articles"
      />
    );
  }

  if (componentName === ComponentName.SINGLE_IMAGE) {
    return (
      <SingleImageRedesign />
    );
  }

  if (componentName === ComponentName.FORM_BLOCK) {
    return (
      <FormBlockRedesign testId="form" />
    );
  }

  if (componentName === ComponentName.SUBMITTED_FORM_BLOCK) {
    return (

      <FormBlockRedesign
        initializeIsSubmit
        testId="submitted-form"
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
      </ul>
    </div>
  );
}

export const getStaticProps: GetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
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
    ])),
  },
});

export async function getStaticPaths() {
  return {
    paths: [`/components/*`],
    fallback: true,
  };
}
