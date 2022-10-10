import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import Layout from '../components/Layout/Layout';
import HeroBlock from '../components/HeroBlock/HeroBlock';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';

export default function PageNotFound() {
  const { t } = useTranslation('pageNotFound');
  const router = useRouter();

  const goToHomePage = useCallback(() => {
    router.replace('/');
  }, []);

  return (
    <Layout>
      <HeroBlock
        title="404"
        gradientTitle={t('gradientTitle')}
        description={t('description')}
        Button={(
          <PrimaryButton onClick={goToHomePage}>
            {t('buttonText')}
          </PrimaryButton>
        )}
      />
    </Layout>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'common',
      'articles',
      'footer',
      'pageNotFound',
      'cookie',
    ])),
  },
});
