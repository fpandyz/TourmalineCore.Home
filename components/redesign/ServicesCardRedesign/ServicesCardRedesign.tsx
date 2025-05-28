import clsx from 'clsx';
import Image from 'next/image';

export default function ServicesCardRedesign(
  {
    title,
    skillsList,
    link,
    linkText,
    theme,
    image,
  }:
  {
    title?: string;
    skillsList?: string[];
    link?: string,
    linkText?: string,
    theme: 'white' | 'grey' | 'black' | 'blue',
    image?: string
  },
) {
  return (
    <div
      className={clsx(
        `services-card-redesign services-card-redesign--${theme}`,
      )}
      draggable="false"
    >
      {
        title && (
          <h3
            className={clsx('title-technology-type-2 services-card-redesign__title', {
            })}
          >
            {title}
          </h3>
        )
      }
      {
        skillsList && (
          <ul className="services-card-redesign__list">
            {skillsList.map((item) => (
              <li
                className="services-card-redesign__item"
                key=""
              >
                {item}
              </li>
            ))}
          </ul>
        )
      }
      {link && (
        <a
          href={link}
          className="services-card-redesign__link"
        >
          {linkText}
        </a>
      )}
      {
        image && (
          <div className="services-card-redesign__image-container">
            <Image
              src={image}
              layout="fill"
              priority
              alt=""
            />
          </div>

        )
      }
    </div>
  );
}
