import clsx from 'clsx';
import { CardWithContentRedesign } from '../CardWithContentRedesign/CardWithContentRedesign';

export type CardWithRepositories = {
  title?: string;
  repositories: {
    name: string;
    description?: string;
    language: string;
  }[]
  markdownText?: string;
};

export function CardWithRepositoriesRedesign({
  title,
  repositories,
  markdownText,
  className,
}: CardWithRepositories & {
  className: string;
}) {
  return (
    <CardWithContentRedesign
      title={title}
      markdownText={markdownText}
      className={clsx('card-with-repositories-redesign', className)}
    >
      <ul className="card-with-repositories-redesign__list">
        {repositories.map(({
          name,
          description,
          language,
        }) => (
          <li className="card-with-repositories-redesign__item" key={name}>
            <h3 className="card-with-repositories-redesign__name">{name}</h3>
            {description && <p className="card-with-repositories-redesign__description">{description}</p>}
            <span className="card-with-repositories-redesign__language">{language}</span>
          </li>
        ))}
      </ul>
    </CardWithContentRedesign>
  );
}
