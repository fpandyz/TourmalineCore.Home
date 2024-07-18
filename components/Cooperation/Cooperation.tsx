import { useTranslation } from 'next-i18next';
import CooperationList from './components/CooperationList/CooperationList';
import usePath from '../../common/hooks/usePath';
import { TCooperationList } from './types';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';

export default function Cooperation() {
  const { slicePathname } = usePath();
  const { t } = useTranslation('cooperation');

  const cooperationList: TCooperationList = t('list', { returnObjects: true });

  return (
    <section
      id={TechnologyPageAnchorLink.cooperation}
      className="cooperation"
    >
      <div className="container cooperation__wrapper">
        <div className="cooperation__inner">
          <h3 className="title-technology-type-1 cooperation__title">{t('title')}</h3>
          <CooperationList list={cooperationList} />
        </div>
        <div className={`cooperation__image cooperation__image--${slicePathname}`} />
      </div>
    </section>
  );
}
