import { useRouter } from 'next/router';

const isChineseLanguage = () => {
  const router = useRouter();

  return router.locale === 'zh';
};

export default isChineseLanguage;
