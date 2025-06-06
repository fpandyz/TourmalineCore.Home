import { useRouter } from 'next/router';

export const isChineseLanguage = () => {
  const router = useRouter();

  return router.locale === 'zh';
};
