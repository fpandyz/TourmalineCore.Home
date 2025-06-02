import clsx from 'clsx';
import Image from 'next/image';
import IconArrow from '../../../icons/icon-arrow-redesign.svg';

export function ServicesCardRedesign({
  title,
  skillsList,
  link,
  linkText,
  theme,
  imageUrl,
}: {
  title?: string;
  skillsList?: string[];
  link?: string,
  linkText?: string,
  theme: 'white' | 'grey' | 'black' | 'blue',
  imageUrl?: string
}) {
  return (
    <div className={clsx(
      `services-card-redesign services-card-redesign--${theme.toLowerCase()}`,
    )}
    >
      {link ? (
        <a
          className="services-card-redesign__link-wrapper"
          href={link}
        >
          {renderCardContent()}
        </a>
      )
        : renderCardContent()}
    </div>

  );

  function renderCardContent() {
    return (
      <div
        className={clsx(
          'services-card-redesign__inner',
        )}
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
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          )
        }
        {link && (
          <span
            className="services-card-redesign__link-text"
          >
            {linkText}
            <IconArrow />
          </span>
        )}
        {
          imageUrl && (
            <div className="services-card-redesign__image-container">
              <Image
                src={imageUrl}
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
}
