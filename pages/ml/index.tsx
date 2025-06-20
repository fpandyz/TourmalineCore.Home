import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Layout } from '../../components/Layout/Layout';
import { PageHead } from '../../components/PageHead/PageHead';
import { HeroBlockTechnology } from '../../components/HeroBlockTechnology/HeroBlockTechnology';
import { Points } from '../../components/Points/Points';
import { Tasks } from '../../components/Tasks/Tasks';
import { Cases } from '../../components/Cases/Cases';
import { Cta } from '../../components/Cta/Cta';
import { Stack } from '../../components/Stack/Stack';
import { Payment } from '../../components/Payment/Payment';
import { Cooperation } from '../../components/Cooperation/Cooperation';
import { ServicesTechnology } from '../../components/ServicesTechnology/ServicesTechnology';
import { FormBlock } from '../../components/FormBlock/FormBlock';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';

export default function MlPage() {
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
      <Layout mainClassName="ml">
        <div className="ml__hero-block-container">
          <HeroBlockTechnology />
          <Points />
        </div>
        <Tasks />
        <Cases />
        <Cta />
        <Stack />
        <Payment />
        <Cooperation />
        <ServicesTechnology />
        <FormBlock
          id={TechnologyPageAnchorLink.Contact}
          buttonClassName="ml__form-button"
        />
      </Layout>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'common',
      'footer',
      'cookie',
      'form',
      'discussion',
      'formBlock',
      'heroMl',
      'pointsMl',
      'tasksMl',
      'paymentMl',
      'cta',
      'stackMl',
      'cooperationMl',
      'servicesTechnologyMl',
      'casesMl',
      'skipLink',
      'langSwitch',
    ])),
  },
});
