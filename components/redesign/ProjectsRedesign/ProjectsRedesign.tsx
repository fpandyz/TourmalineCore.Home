import { useTranslation } from 'next-i18next';
import { ProjectRedesignCardWithImage } from './components/ProjectsRedesignCardWithImage/ProjectsRedesignCardWithImage';
import { Client, ProjectCardWithImage } from './types';

export function ProjectRedesign({
  translationKey,
}:{
  translationKey: string
}) {
  const { t } = useTranslation(translationKey);

  const projectCardsWithImage: ProjectCardWithImage[] = t('projectsCardsWithImage', { returnObjects: true });

  const clients: Client[] = t('clients', { returnObjects: true });

  const sectionTitle = t('title');

  return (
    <section className="projects-redesign">
      <div className="container-redesign projects-redesign__wrapper">
        {sectionTitle && <h2 className="projects-redesign__title">{sectionTitle}</h2>}
        <ul className="projects-redesign__cards">
          {projectCardsWithImage.map(({
            title,
            description,
            imageUrl,
            size,
            link,
          }) => (
            <ProjectRedesignCardWithImage
              key={title}
              className="projects-redesign__card"
              title={title}
              description={description}
              imageUrl={imageUrl}
              size={size}
              link={link}
            />
          ))}
          <li className="projects-redesign__info-card">
            <div className="projects-redesign__clients">
              <h3 className="projects-redesign__clients-title">
                {t('clientsTitle')}
              </h3>
              <div className="projects-redesign__clients-links">
                {clients.map((
                  {
                    name,
                    link,
                  },
                  index,
                ) => (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                  <>
                    {link ? (
                      <>
                        <a
                          className="projects-redesign__client-link"
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={name}
                        >
                          {name}
                        </a>
                        {index < clients.length - 1 && <span className="projects-redesign__client-comma">, </span>}
                      </>
                    ) : (
                      <span
                        className="projects-redesign__client-name"
                        key={name}
                      >
                        {name}
                        {index < clients.length - 1 && ', '}
                      </span>
                    )}
                  </>
                ))}
              </div>
              <span className="projects-redesign__client-nda">{t('nda')}</span>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
}
