import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout/Layout';
import PageHead from '../../components/PageHead/PageHead';
import Frontend from '../../partials/Articles/Frontend/Frontend';

export default function FrontendPage() {
  return (
    <>
      {/* TODO Добавить перевод */}
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
      <Layout>
        <Frontend />
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
