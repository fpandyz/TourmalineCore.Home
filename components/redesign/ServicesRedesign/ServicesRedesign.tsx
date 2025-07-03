import { useTranslation } from 'next-i18next';
import { ServicesCardRedesign } from '../ServicesCardRedesign/ServicesCardRedesign';
import { AnimatedLink } from '../AnimatedLink/AnimatedLink';

type NewServicesList = {
  id: number;
  title?: string;
  skillsList?: string[];
  link?: string;
  linkText?: string;
  theme: 'white' | 'grey' | 'black' | 'blue';
  imageUrl?: string;
}[];

type TeamsCard = {
  theme: 'white' | 'grey' | 'black' | 'blue';
  imageUrl: string;
};

type Teams = {
  title: string;
  description: string;
  link: string;
  linkText: string;
  teamsList: {
    teamName: string;
    teamIcon: string;
    teamLink: string;
  }[];
};

export function ServicesRedesign({
  targetId,
}: {
  targetId?: string;
}) {
  const {
    t,
  } = useTranslation(`servicesRedesign`);

  const newServicesList: NewServicesList = t(`list`, {
    returnObjects: true,
  });
  const teamsCard: TeamsCard = t(`teamsCard`, {
    returnObjects: true,
  });
  const teams: Teams = t(`teams`, {
    returnObjects: true,
  });

  return (
    <section
      className="services-redesign"
      data-testid="services"
      {...(targetId && {
        id: targetId,
      })}
    >
      <ul className="services-redesign__cards grid container-redesign">
        <li className="services-redesign__card col-tablet-12 col-tablet-xl-3">
          <h2 className="services-redesign__title">
            {t(`title`)}
          </h2>
        </li>
        {newServicesList.map(({
          id,
          title,
          skillsList,
          link,
          linkText,
          theme,
          imageUrl,
        }) => (
          <li
            className="services-redesign__card col-tablet-6 col-tablet-xl-3"
            key={id}
          >
            <ServicesCardRedesign
              title={title}
              skillsList={skillsList}
              link={link}
              linkText={linkText}
              theme={theme}
              imageUrl={imageUrl}
            />
          </li>
        ))}
        <li className="services-redesign__card col-tablet-12 col-tablet-xl-3" />
        <li className="services-redesign__card col-tablet-12 col-tablet-xl-3">
          <ServicesCardRedesign
            theme={teamsCard.theme}
            imageUrl={teamsCard.imageUrl}
          />
        </li>
        <li className="services-redesign__teams col-tablet-12 col-tablet-xl-6">
          <div className="services-redesign__wrapper">
            <h3 className="services-redesign__subtitle">{teams.title}</h3>
            <p className="services-redesign__description">
              {teams.description}
            </p>
            <ul className="services-redesign__teams-list">
              {
                teams.teamsList.map(({
                  teamIcon,
                  teamLink,
                  teamName,
                }) => (
                  <li
                    className="services-redesign__team"
                    key={teamName}
                  >
                    <span className="services-redesign__icon-wrapper">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={teamIcon}
                        alt=""
                      />
                    </span>
                    {
                      teamLink
                        ? (
                          <AnimatedLink
                            className="services-redesign__team-link"
                            href={teamLink}
                            reverse
                          >
                            {teamName}
                          </AnimatedLink>
                        )
                        : (
                          <span className="services-redesign__team-name">
                            {teamName}
                          </span>
                        )
                    }
                  </li>
                ))
              }
            </ul>
            <a
              href={teams.link}
              className="services-redesign__featured-link"
            >
              {teams.linkText}
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
