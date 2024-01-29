import { useTranslation } from 'next-i18next';
import CooperationList from './CooperationList/CooperationList';
import usePath from '../../common/hooks/usePath';
import { TCooperationList } from './types';

export default function Cooperation() {
  const { slicePathname } = usePath();
  const { t } = useTranslation('cooperation');

  const cooperationList: TCooperationList = t('list', { returnObjects: true });

  return (
    <section className="cooperation">
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
