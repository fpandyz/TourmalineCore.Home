import clsx from 'clsx';
import { CardWithContent, CardWithContentRedesign } from '../CardWithContentRedesign/CardWithContentRedesign';
import useDeviceSize from '../../../common/hooks/useDeviceSize';

export type CardWithRepositories = CardWithContent & {
  repositories: {
    name: string;
    description?: string;
    language: string;
    link: string;
  }[]
};

export function CardWithRepositoriesRedesign({
  title,
  repositories,
  markdownText,
  className,
}: CardWithRepositories & {
  className: string;
}) {
  const { width } = useDeviceSize();
  const isTabletXl = width >= 1024;

  const repositoriesList = isTabletXl ? repositories : repositories.slice(0, 1);

  return (
    <CardWithContentRedesign
      title={title}
      markdownText={markdownText}
      className={clsx('card-with-repositories-redesign', className)}
    >
      <ul className="card-with-repositories-redesign__list">
        {repositoriesList.map(({
          name,
          description,
          language,
          link,
        }) => (
          <li
            className="card-with-repositories-redesign__item"
            key={name}
          >
            <a
              className="card-with-repositories-redesign__link"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-with-repositories-redesign__item-inner">
                <h3 className={clsx('card-with-repositories-redesign__name', {
                  'card-with-repositories-redesign__name--no-description': !description,
                })}
                >
                  {name}
                </h3>
                {description && <p className="card-with-repositories-redesign__description">{description}</p>}
                <span
                  className={`card-with-repositories-redesign__language card-with-repositories-redesign__language--${language.toLowerCase()}`}
                >
                  {language}
                </span>
              </div>
            </a>

          </li>
        ))}
      </ul>
    </CardWithContentRedesign>
  );
}
