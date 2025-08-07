import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';

import { LayoutRedesign } from '../components/redesign/LayoutRedesign/LayoutRedesign';
import { CustomError } from '../components/redesign/CustomError/CustomError';

export default function Custom404() {
  const {
    t,
  } = useTranslation(`pageNotFound`);

  return (
    <LayoutRedesign>
      <CustomError
        statusCode={404}
        message={t(`message`)}
      />
    </LayoutRedesign>
  );
}

export const getStaticProps: GetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      `common`,
      `articles`,
      `footerRedesign`,
      `pageNotFound`,
      `cookie`,
      `formBlockRedesign`,
    ])),
  },
});
