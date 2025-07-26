import { useMemo } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import IconDownArrow from '../../../../../icons/icon-arrow-down-redesign.svg';
import GlobalIcon from '../../../../../icons/global-icon.svg';
import { DEFAULT_LOCALE, languagesRedesign } from '../../../../../common/constants';

export function LangSwitchRedesign({
  className,
}: {
  className?: string;
}) {
  const router = useRouter();

  const routerLocale = useMemo(() => {
    if (!router.locale) {
      return DEFAULT_LOCALE;
    }

    return router.locale;
  }, [router.locale]);

  return (
    <div
      className={clsx(
        `lang-switch-redesign`,
        className,
      )}
    >
      <button
        type="button"
        className="lang-switch-redesign__button"
        aria-label={router.locale === `ru`
          ? `Выбрать язык`
          : `Select language`}
      >
        <GlobalIcon
          aria-hidden="true"
          className="lang-switch-redesign__icon"
        />
        <span aria-label={
          router.locale === `ru`
            ? `Сейчас выбран`
            : `Currently selected`
        }
        >
          {languagesRedesign[routerLocale].name}
        </span>
        <IconDownArrow
          aria-hidden="true"
          className="lang-switch-redesign__arrow"
        />
      </button>

      {router.locales && (
        <ul className="lang-switch-redesign__list">
          {router.locales
            .filter((locale) => locale !== routerLocale)
            .map((locale) => (
              <li
                key={locale}
                className="lang-switch-redesign__option"
              >
                <Link
                  role="presentation"
                  href={router.asPath}
                  locale={locale}
                  className="lang-switch-redesign__link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (routerLocale !== locale) {
                      window.open((e.target as HTMLAnchorElement).href, `_self`);
                    }
                  }}
                >
                  {languagesRedesign[locale].name}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
