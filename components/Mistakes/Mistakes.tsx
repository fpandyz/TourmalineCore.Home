import { useTranslation } from 'next-i18next';
import { SectionProps } from '../../types/globals';
import { getMistakes } from './getMistakes';
import MistakeItem from './MistakeItem/MistakeItem';

function Mistakes({
  ...props
}: SectionProps) {
  const { t } = useTranslation('mistakes');

  const dataMistakes = getMistakes(t);

  return (

    <section className="section mistakes" {...props}>
      <h2 className="title-type-3">{t('title')}</h2>

      <div className="mistakes__subtitle">{t('subtitle')}</div>

      <div className="scroll mistakes__list">
        {dataMistakes.map((item, index) => (
          <MistakeItem
            key={item.title}
            title={item.title}
            mistakes={item.mistakes}
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          />
        ))}
      </div>

      <div
        className="caption mistakes__caption"
        data-aos="fade-up"
        data-aos-delay={0}
        data-aos-anchor-placement="center-bottom"
      >
        {t('caption')}
      </div>
    </section>
  );
}

export default Mistakes;
