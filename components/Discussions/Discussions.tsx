import { useTranslation } from 'next-i18next';
import { usePath } from '../../common/hooks';

export function Discussions() {
  const {
    t,
  } = useTranslation(`discussion`);

  const {
    slicePathname,
  } = usePath();

  const steps: string[] = t(`steps`, {
    returnObjects: true,
  });

  return (
    <div className="discussions">
      <div className="title-type-4 discussions__title">{t(`modalListTitle`)}</div>
      <ul className="discussions__list">
        {steps.map((text, index) => (
          <li
            key={text}
            className="discussions__item"
          >
            <div className={`discussions__number discussions__number--${slicePathname}`}>{index + 1}</div>
            <span className="discussions__text">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
