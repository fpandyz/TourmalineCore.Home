import Link from 'next/link';
import clsx from 'clsx';
import usePath from '../../../../common/hooks/usePath';
import IconArrow from '../../../../icons/cases-arrow.svg';

export default function ServicesTechnologyCard(
  {
    title,
    description,
    link,
    isFilled,
  }:
  {
    title: string;
    description: string;
    link: string,
    isFilled?: boolean,
  },
) {
  const { slicePathname } = usePath();

  return (
    <Link
      href={link}
      scroll={!!link}
      draggable="false"
    >
      <a
        className={clsx(`services-technology-card services-technology-card--${slicePathname}`, {
          'services-technology-card--hover': link,
          'services-technology-card--filled': isFilled,
        })}
        draggable="false"
      >
        <div className="services-technology-card__inner">
          <h3
            className={clsx(`title-technology-type-2 services-technology-card__title services-technology-card__title--${slicePathname}`, {
              'services-technology-card__title--filled': isFilled,
            })}
          >
            {title}
          </h3>
          <span
            className={clsx(`services-technology-card__description services-technology-card__description--${slicePathname}`, {
              'services-technology-card__description--filled': isFilled,
            })}
          >
            {description}
          </span>
        </div>
        {link && (
          <span className="services-technology-card__arrow">
            <IconArrow />
          </span>
        )}
      </a>
    </Link>
  );
}
