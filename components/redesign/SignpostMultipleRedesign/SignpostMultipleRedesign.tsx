import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { SignpostRedesign } from '../SignpostRedesign/SignpostRedesign';
import IconArrow from '../../../icons/icon-arrow-redesign.svg';

type Signpost = {
  title: string;
  subtitle: string;
  link?: string;
  imageUrl: string;
};

export function SignpostMultipleRedesign({
  translationKey,
  dataTestId,
}: {
  translationKey: string;
  dataTestId?: string;
}) {
  const {
    t,
  } = useTranslation(translationKey);

  const signposts: Signpost[] = t(`signposts`, {
    returnObjects: true,
  });

  return (
    <section
      className="signpost-multiple-redesign container-redesign"
      data-testid={dataTestId}
    >
      <div className="signpost-multiple-redesign__head">
        <h2 className="signpost-multiple-redesign__title">{t(`title`)}</h2>
        {t(`viewAllLink`)
        && (
          <Link
            className="signpost-multiple-redesign__view-all-link"
            href={t(`viewAllLink`)}
          >
            {t(`viewAllLinkText`)}
            <IconArrow />
          </Link>
        )}
      </div>
      <ul
        className="signpost-multiple-redesign__list grid"
      >
        {signposts.map(({
          title,
          subtitle,
          link,
          imageUrl,
        }) => (
          <li
            key={title}
            // This element has scrolling on a mobile device, so axe-core recommends adding a tabIndex
            // More info - https://dequeuniversity.com/rules/axe/4.10/scrollable-region-focusable?application=playwright
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className="signpost-multiple-redesign__item col-desktop-3"
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
