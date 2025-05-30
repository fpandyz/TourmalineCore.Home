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

  const sectionTitle = t('title');

  return (
    <section
      className="signpost-multiple-redesign container-redesign"
    >
      <h2 className="signpost-multiple-redesign__title">{sectionTitle}</h2>
      <ul className="grid">
        {signposts.map(({
          title,
          subtitle,
          link,
          imageUrl,
        }) => (
          <li
            key={title}
            className="signpost-multiple-redesign__card col-tablet-3"
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
