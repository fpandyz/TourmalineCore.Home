import {
  useState, useRef, useMemo,
} from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useAutoClose } from '../../../../common/hooks/useAutoClose';
import { languages } from '../../../../common/utils/consts/languages';

import IconArrow from '../../icons/icon-arrow.svg';
import { DEFAULT_LOCALE } from '../../../../common/utils/consts/localization';
import isChineseLanguage from '../../../../common/utils/isChineseLanguage';

function LangSwitch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [isTooltipOpened, setIsTooltipOpened] = useState(false);

  useAutoClose(containerRef, setIsTooltipOpened);

  const routerLocale = useMemo(() => {
    if (!router.locale) {
      return DEFAULT_LOCALE;
    }

    return router.locale;
  }, [router.locale]);

  return (
    <div
      ref={containerRef}
      className={clsx('lang-switch', {
        'lang-switch--zh': isChineseLanguage(),
      })}
    >
      <button
        type="button"
        className="lang-switch__active"
        onClick={() => setIsTooltipOpened(!isTooltipOpened)}
      >
        {languages[routerLocale].icon()}
        {languages[routerLocale].shortName}
        <IconArrow
          className={clsx(
            'lang-switch__arrow',
            { 'lang-switch__arrow--open': isTooltipOpened },
          )}
        />
      </button>

      {router.locales && isTooltipOpened && (
        <ul className="lang-switch__list">
          {router.locales.map((locale) => (
            <li
              key={locale}
              className="lang-switch__option"
            >
              <Link href={router.asPath} locale={locale}>
                <a
                  role="presentation"
                  className={clsx(
                    'lang-switch__link',
                    { 'lang-switch__link--active': routerLocale === locale },
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    if (routerLocale !== locale) {
                      window.open((e.target as HTMLAnchorElement).href, '_self');
                    }
                  }}
                >
                  {languages[locale].icon()}
                  {languages[locale].name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LangSwitch;
