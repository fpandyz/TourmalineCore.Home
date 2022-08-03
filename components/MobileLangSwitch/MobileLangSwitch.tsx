import {
  useMemo,
} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { languages } from '../../utils/consts/languages';

function MobileLangSwitch() {
  const router = useRouter();

  const routerLocale = useMemo(() => {
    if (!router.locale) {
      return 'en';
    }

    return router.locale;
  }, [router.locale]);

  const routerLocales = router.locales || [];

  return (
    <div className="mobile-lang-switch">
      <ul className="mobile-lang-switch__list">
        {routerLocales.map((locale) => (
          <li
            key={locale}
            className="mobile-lang-switch__option"
          >
            <Link
              href={{
                pathname: router.pathname,
                query: router.query,
              }}
              locale={locale}
            >
              <a
                className={clsx(
                  'mobile-lang-switch__link',
                  { 'mobile-lang-switch__link--active': routerLocale === locale },
                )}
              >
                {languages[locale].icon()}
                {languages[locale].shortName}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileLangSwitch;
