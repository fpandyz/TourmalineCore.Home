import { useRouter } from 'next/router';

export const isChineseLanguage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return router.locale === `zh`;
};
