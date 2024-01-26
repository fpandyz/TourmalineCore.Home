import { useRouter } from 'next/router';
import CooperationList from './CooperationList/CooperationList';

const COOPERATION_TITLE = 'Виды сотрудничества';

export default function Cooperation() {
  const { pathname } = useRouter();

  return (
    <section className="cooperation">
      <div className="container cooperation__wrapper">
        <div className="cooperation__inner">
          <h3 className="title-technology-type-1 cooperation__title">{COOPERATION_TITLE}</h3>
          <CooperationList />
        </div>
        <div className={`cooperation__image cooperation__image--${pathname.slice(1)}`} />
      </div>
    </section>
  );
}
