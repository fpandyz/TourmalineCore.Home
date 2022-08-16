import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { GetServerSideProps } from 'next';

import PageHead from '../components/PageHead/PageHead';
import Skills from '../components/Skills/Skills';
import LayoutHomePage from '../components/LayoutHomePage/LayoutHomePage';
import CompletedProjects from '../components/CompletedProjects/CompletedProjects';
import Services from '../components/Services/Services';
import Process from '../components/Process/Process';
import WorkStructure from '../components/WorkStructure/WorkStructure';
import Mistakes from '../components/Mistakes/Mistakes';
import AdaptationToProject from '../components/AdaptationToProject/AdaptationToProject';
import Tools from '../components/Tools/Tools';
import Form from '../components/Form/Form';

import { navigationLinks } from '../utils/consts/navigation';
import { SendEmail, sendEmail } from '../common/utils/fetchSend';

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
        <AdaptationToProject id={navigationLinks[3]} />
        <Process id={navigationLinks[4]} />
        <Tools id={navigationLinks[5]} />
        <WorkStructure id={navigationLinks[6]} />
        <Mistakes id={navigationLinks[7]} />
        <section className="section">
          <Form onFormSubmit={onFormSubmit} />
        </section>
      </LayoutHomePage>
    </>
  );

  async function onFormSubmit(formEvent: FormData) {
    const messageSend: SendEmail = {
      name: '',
      email: '',
      message: '',
    };

    Object.keys(messageSend).forEach((key) => {
      const value = formEvent.get(key);
      if (value) {
        messageSend[key as keyof SendEmail] = value.toString();
      } else {
        messageSend[key as keyof SendEmail] = 'empty';
      }
    });

    sendEmail(messageSend);
  }
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
      'workStructure',
      'mistakes',
      'adaptationToProject',
      'process',
      'tools',
      'form',
    ])),
  },
});
