import Link from 'next/link';
import clsx from 'clsx';
import usePath from '../../../../common/hooks/usePath';
import IconArrow from '../../../../icons/cases-arrow.svg';

export default function ServicesTechnologyCard(
  {
    title,
    description,
    link,
  }:
  {
    title: string;
    description: string;
    link: string
  },
) {
  const { slicePathname } = usePath();

  return (
    <Link
      href={link}
      scroll={!!link}
    >
      <a className={clsx(`services-technology-card services-technology-card--${slicePathname}`, {
        'services-technology-card--hover': link,
      })}
      >
        <div className="services-technology-card__inner">
          <h3 className={`title-technology-type-2 services-technology-card__title services-technology-card__title--${slicePathname}`}>{title}</h3>
          <span className="services-technology-card__description">{description}</span>
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
