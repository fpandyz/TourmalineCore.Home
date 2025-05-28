import { useTranslation } from 'next-i18next';
import { ProjectRedesignCardWithImage } from './components/ProjectsRedesignCardWithImage/ProjectsRedesignCardWithImage';
import { Client, ProjectCardWithImage } from './types';

export function ProjectRedesign() {
  const { t } = useTranslation('projectsRedesign');

  const projectCardsWithImage: ProjectCardWithImage[] = t('projectsCardsWithImage', { returnObjects: true });

  const clients: Client[] = t('clients', { returnObjects: true });

  const sectionTitle = t('title');

  return (
    <section className="projects-redesign">
      <div className="projects-redesign__wrapper">
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
              <ul className="projects-redesign__clients-list">
                {clients.map((
                  {
                    name,
                    link,
                  },
                  index,
                ) => (
                  <li className="projects-redesign__client-item">
                    {link ? (
                      <a
                        className="projects-redesign__client-link"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    ) : (
                      <span className="projects-redesign__client-text">{name}</span>
                    )}
                    {index < clients.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <span className="projects-redesign__client-nda">{t('nda')}</span>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
}
