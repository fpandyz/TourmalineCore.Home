import Link from 'next/link';
import clsx from 'clsx';

export default function ServicesCardRedesign(
  {
    title,
    skillsList,
    link,
    // theme,
  }:
  {
    title: string;
    skillsList: string[];
    link: string,
    // theme: boolean,
  },
) {
  return (
    <Link
      href={link}
      draggable="false"
    >
      <a
        className={clsx('services-card-redesign', {
          'services-card-redesign--hover': link,
        })}
        draggable="false"
      >
        <div className="services-card-redesign__inner">
          <h3
            className={clsx('title-technology-type-2 services-card-redesign__title}', {
            })}
          >
            {title}
          </h3>
          <ul>
            {skillsList.map((item) => (
              <li key="">{item}</li>
            ))}
          </ul>
        </div>
        {link && (
          <span className="services-card-redesign__arrow">
            ddd
          </span>
        )}
      </a>
    </Link>
  );
}
