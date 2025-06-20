import { useTranslation } from 'next-i18next';
import { SignpostRedesign } from '../SignpostRedesign/SignpostRedesign';

type Signpost = {
  title: string;
  subtitle: string;
  link?: string;
  imageUrl: string
};

export function SignpostMultipleRedesign({
  translationKey,
}: {
  translationKey: string;
}) {
  const { t } = useTranslation(translationKey);

  const signposts: Signpost[] = t('signposts', { returnObjects: true });

  return (
    <section
      className="signpost-multiple-redesign container-redesign"
    >
      <h3 className="signpost-multiple-redesign__title">{t('title')}</h3>
      <ul className="signpost-multiple-redesign__list grid">
        {signposts.map(({
          title,
          subtitle,
          link,
          imageUrl,
        }) => (
          <li
            key={title}
            className="col-desktop-3"
          >
            <SignpostRedesign
              title={title}
              subtitle={subtitle}
              link={link}
              imageUrl={imageUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
