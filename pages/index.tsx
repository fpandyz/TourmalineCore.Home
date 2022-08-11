import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { GetServerSideProps } from 'next';

import PageHead from '../components/PageHead/PageHead';
import Skills from '../components/Skills/Skills';
import LayoutHomePage from '../components/LayoutHomePage/LayoutHomePage';
import CompletedProjects from '../components/CompletedProjects/CompletedProjects';
import Services from '../components/Services/Services';
import { navigationLinks } from '../utils/consts/navigation';
import Mistakes from '../components/Mistakes/Mistakes';

export default function HomePage() {
  const { t } = useTranslation('common');

  return (
    <>
      <PageHead
        seoData={{
          seo: {
            title: t('title'),
            description: t('description'),
          },
          keywords: t('keywords'),
          metaTags: [],
          structuredData: '',
          additionalCode: '',
        }}
      />

      <LayoutHomePage navigationLinks={navigationLinks}>
        <Services id={navigationLinks[0]} />
        <Skills id={navigationLinks[1]} />
        <CompletedProjects id={navigationLinks[2]} />
        <Mistakes />
      </LayoutHomePage>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'common',
      'articles',
      'footer',
      'heroBlock',
      'skills',
      'services',
      'completedProjects',
      'navigation',
      'mistakes',
    ])),
  },
});
