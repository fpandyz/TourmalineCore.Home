import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../components/Layout/Layout';
import ExampleComponents from '../components/ExampleComponents/ExampleComponents';

function ComponentsPage() {
  return (
    <Layout>
      <ExampleComponents />
    </Layout>
  );
}

export default ComponentsPage;

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'articles', 'footer'])),
  },
});
