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

  return (
    <div className="components-page container-redesign">
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
      </ul>
    </div>
  );
}

export const getStaticProps: GetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      `cardsGridRedesign`,
      `collageWithLinkRedesign`,
      `collageWithTitleRedesign`,
      `footerRedesign`,
      `heroRedesign`,
    ])),
  },
});

export async function getStaticPaths() {
  return {
    paths: [`/components/*`],
    fallback: true,
  };
}
