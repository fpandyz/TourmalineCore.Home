import CooperationList from './CooperationList/CooperationList';
import usePath from '../../common/hooks/usePath';

const COOPERATION_TITLE = 'Виды сотрудничества';

export default function Cooperation() {
  const { slicePathname } = usePath();

  return (
    <section className="cooperation">
      <div className="container cooperation__wrapper">
        <div className="cooperation__inner">
          <h3 className="title-technology-type-1 cooperation__title">{COOPERATION_TITLE}</h3>
          <CooperationList />
        </div>
        <div className={`cooperation__image cooperation__image--${slicePathname}`} />
      </div>
    </section>
  );
}
