import { useRouter } from 'next/router';
import GitalkComponent from 'gitalk/dist/gitalk-component';

export default function Comments() {
  const router = useRouter();

  return (
    <GitalkComponent
      options={{
        clientID: '579b35685670b2880de2',
        clientSecret: '8544bfd6cf80d7eb6c58931517644cad4e03b7a8',
        repo: 'TourmalineCore.Articles',
        owner: 'TourmalineCore',
        admin: ['fpandyz', 'gggvnr'],
        id: window.location.pathname,
        distractionFreeMode: false,
        language: router.locale || 'en',
      }}
    />
  );
}
