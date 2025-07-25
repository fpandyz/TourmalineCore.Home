import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Layout } from '../../components/Layout/Layout';
import { PageHead } from '../../components/PageHead/PageHead';
import { HeroBlockTechnology } from '../../components/HeroBlockTechnology/HeroBlockTechnology';
import { Points } from '../../components/Points/Points';
import { Tasks } from '../../components/Tasks/Tasks';
import { Stack } from '../../components/Stack/Stack';
import { Cases } from '../../components/Cases/Cases';
import { Stages } from '../../components/Stages/Stages';
import { FormBlock } from '../../components/FormBlock/FormBlock';
import { TechnologyPageAnchorLink } from '../../common/enums';

export default function TeamsPage() {
  const {
    t,
  } = useTranslation(`common`);

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
      <Layout mainClassName="teams">
        <div className="teams__hero-block-container">
          <HeroBlockTechnology />
          <Points />
        </div>
        <Tasks />
        <Stack />
        <Cases />
        <Stages />
        <FormBlock
          id={TechnologyPageAnchorLink.Contact}
          buttonClassName="teams__form-button"
        />
      </Layout>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      `common`,
      `footer`,
      `cookie`,
      `form`,
      `discussion`,
      `formBlock`,
      `heroTeams`,
      `pointsTeams`,
      `tasksTeams`,
      `stackTeams`,
      `casesTeams`,
      `stagesTeams`,
      `servicesTechnologyTeams`,
    ])),
  },
});
