import { useRouter } from 'next/router';

export default function usePath() {
  const { pathname } = useRouter();

  return {
    pathname,
    slicePathname: pathname.slice(1),
  };
}
