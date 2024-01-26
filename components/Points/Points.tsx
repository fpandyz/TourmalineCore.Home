import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { AppRoute } from '../../common/utils/app-route';

export default function Points() {
  const { pathname } = useRouter();
  const { t } = useTranslation(getTranslationNamespace(pathname));

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
          <div className={`points__image points__image--${pathname.slice(1)}`} />
        </div>
      </div>
    </section>
  );

  function getTranslationNamespace(page: string) {
    switch (page) {
      case AppRoute.Frontend:
        return 'pointsFrontend';

      default:
        return '';
    }
  }
}
