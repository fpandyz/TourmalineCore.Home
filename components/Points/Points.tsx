import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import usePath from '../../common/hooks/usePath';

export default function Points() {
  const { slicePathname } = usePath();
  const { t } = useTranslationNamespace('points');

  const pointsList: string[] = t('list', { returnObjects: true });

  return (
    <section className="points">
      <div className="container points__wrapper">
        <div className="points__inner">
          <h3 className="title-technology-type-1 points__title">{t('title')}</h3>
          <ul className="points__list">
            {pointsList.map((text) => (
              <li
                key={text}
                className="points__item"
              >
                <span className="points__text">{text}</span>
              </li>
            ))}
          </ul>
          <div className={`points__image points__image--${slicePathname}`} />
        </div>
      </div>
    </section>
  );
}
