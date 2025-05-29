import { useTranslation } from 'next-i18next';
import { TextWithLink, ProjectCardWithImage } from './types';
import { ProjectsCardWithImageRedesign } from '../ProjectsCardWithImageRedesign/ProjectsCardWithImageRedesign';

export function ProjectWithTextBlockRedesign({
  translationKey,
}:{
  translationKey: string
}) {
  const { t } = useTranslation(translationKey);

  const projectCardsWithImage: ProjectCardWithImage[] = t('projectsCardsWithImage', { returnObjects: true });

  const clients: TextWithLink[] = t('clients', { returnObjects: true });

  const sectionTitle = t('title');

  const colCount = projectCardsWithImage.length + 2;

  return (
    <section className="projects-with-text-block-redesign">
      <div className="container-redesign projects-with-text-block-redesign__wrapper">
        {sectionTitle && <h2 className="projects-with-text-block-redesign__title">{sectionTitle}</h2>}
        <ul className="projects-with-text-block-redesign__cards grid">
          {projectCardsWithImage.map(({
            title,
            description,
            imageUrl,
            size,
            link,
          }) => (
            <ProjectsCardWithImageRedesign
              key={title}
              className={`projects-with-text-block-redesign__card col-desktop-${colCount}`}
              title={title}
              description={description}
              imageUrl={imageUrl}
              size={size}
              link={link}
            />
          ))}
          <li className={`projects-with-text-block-redesign__text-block col-desktop-${colCount}`}>
            <h3 className="projects-with-text-block-redesign__text-block-title">
              {t('clientsTitle')}
            </h3>

            {/* Todo: In the future, change it to markdown? */}
            <div className="projects-with-text-block-redesign__text-block-content">
              {clients.map((
                {
                  text,
                  link,
                },
                index,
              ) => (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {link ? (
                    <>
                      <a
                        className="projects-with-text-block-redesign__text-block-link"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={text}
                      >
                        {text}
                      </a>
                      {index < clients.length - 1 && <span className="projects-with-text-block-redesign__text-block-comma">, </span>}
                    </>
                  ) : (
                    <span
                      className="projects-with-text-block-redesign__text-block-name"
                      key={text}
                    >
                      {text}
                      {index < clients.length - 1 && ', '}
                    </span>
                  )}
                </>
              ))}
            </div>
            <span className="projects-with-text-block-redesign__text-block-nda">{t('nda')}</span>
          </li>

        </ul>
      </div>
    </section>
  );
}
