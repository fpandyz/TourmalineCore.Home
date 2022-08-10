import { useTranslation } from 'next-i18next';
import { getMistakes } from './getMistakes';
import MistakeItem from './MistakeItem/MistakeItem';

function Mistakes() {
  const { t } = useTranslation('mistakes');

  const dataMistakes = getMistakes(t);

  return (

    <section className="section mistakes">
      <h2 className="title-type-3">{t('title')}</h2>

      <div className="mistakes__subtitle">{t('subtitle')}</div>

      <div className="mistakes__list">
        {dataMistakes.map((item) => (
          <MistakeItem
            key={item.title}
            title={item.title}
            mistakes={item.mistakes}
          />
        ))}
      </div>

      <div className="caption mistakes__caption">{t('caption')}</div>
    </section>
  );
}

export default Mistakes;
