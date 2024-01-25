import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import HeroBlockTechnology from '../../components/HeroBlockTechnology/HeroBlockTechnology';
import Points from '../../components/Points/Points';
import Tasks from '../../components/Tasks/Tasks';
import Cases from '../../components/Cases/Cases';
import Stack from '../../components/Stack/Stack';
import Cta from '../../components/Cta/Cta';

export default function FrontendPage() {
  return (
    <>
      {/* TODO add translate */}
      <PageHead
        seoData={{
          seo: {
            title: 'Tourmaline Core | Frontend',
            description: 'Description',
          },
          keywords: 'разработка, корпоративные информационные системы, публичные сайты',
          metaTags: [],
          structuredData: '',
          additionalCode: '',
        }}
      />
      <Layout mainClassName="frontend__main">
        {/* TODO add data from json */}
        <div className="frontend__hero-block-container">
          <HeroBlockTechnology
            title="Frontend разработка"
            description="Разработка сайтов и веб-приложений на React, TypeScript и не только"
          />
          <Points />
        </div>
        <Tasks />
        <Cases />
        <Cta />
        <Stack />
      </Layout>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'common',
      'articles',
      'footer',
      'heroBlockHomePage',
      'skills',
      'services',
      'completedProjects',
      'navigation',
      'workStructure',
      'mistakes',
      'cookie',
      'adaptationToProject',
      'process',
      'tools',
      'form',
      'formBlock',
      'discussion',
    ])),
  },
});
