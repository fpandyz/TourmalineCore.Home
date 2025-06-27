import Link from "next/link";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { ComponentName } from "../../common/utils/enum";
import { CardsGridRedesign } from "../../components/redesign/CardsGridRedesign/CardsGridRedesign";

export default function ComponentsPage() {
  const router = useRouter();
  const {
    query,
  } = router;

  const componentName = query.component?.[0];

  if (componentName === ComponentName.CARDS_GRID) {
    return <CardsGridRedesign />;
  }

  return (
    <div className="components-page container-redesign">
      <ul className="components-page__list">
        <li className="components-page__item">
          <Link href={ComponentName.CARDS_GRID}>Discounts categories</Link>
        </li>

      </ul>
    </div>
  );
}

export const getStaticProps: GetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [`cardsGridRedesign`])),
  },
});

export async function getStaticPaths() {
  return {
    paths: [`/components/*`],
    fallback: true,
  };
}
