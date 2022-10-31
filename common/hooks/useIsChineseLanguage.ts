import { useRouter } from 'next/router';

const useIsChineseLanguage = () => {
  const router = useRouter();

  return router.locale === 'zh';
};

export default useIsChineseLanguage;
