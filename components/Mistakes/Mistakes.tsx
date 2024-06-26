import { useTranslation } from 'next-i18next';
import { SectionProps } from '../../types/globals';
import { getMistakes } from './getMistakes';
import MistakeItem from './components/MistakeItem/MistakeItem';

function Mistakes({
  animationName,
  ...props
}: SectionProps) {
  const { t } = useTranslation('mistakes');

  const dataMistakes = getMistakes(t);

  return (

    <section className="mistakes" {...props}>
      <div
        className="container container--home-page"
        data-aos={animationName}
      >
        <h2 className="title-type-3">{t('title')}</h2>

        <div className="mistakes__subtitle">{t('subtitle')}</div>

        <div className="custom-scroll mistakes__list">
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
      </div>
    </section>
  );
}

export default Mistakes;
