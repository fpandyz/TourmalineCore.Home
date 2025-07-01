import { CooperationList } from './components/CooperationList/CooperationList';
import { TCooperationList } from './types';
import { TechnologyPageAnchorLink } from '../../common/enums';
import { usePath, useTranslationNamespace } from '../../common/hooks';

export function Cooperation() {
  const {
    slicePathname,
  } = usePath();
  const {
    t,
  } = useTranslationNamespace(`cooperation`);

  const cooperationList: TCooperationList = t(`list`, {
    returnObjects: true,
  });

  return (
    <section
      id={TechnologyPageAnchorLink.Cooperation}
      className="cooperation"
    >
      <div className="container cooperation__wrapper">
        <div className="cooperation__inner">
          <h2 className={`title-technology-type-1 cooperation__title cooperation__title--${slicePathname}`}>{t(`title`)}</h2>
          <CooperationList list={cooperationList} />
        </div>
        <div className={`cooperation__image cooperation__image--${slicePathname}`} />
      </div>
    </section>
  );
}
