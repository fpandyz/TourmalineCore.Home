import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import clsx from 'clsx';
import LangSwitch from '../LangSwitch/LangSwitch';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';

import IconLogo from '../../icons/logo.svg';
import IconBurger from '../../icons/burger.svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import useIsChineseLanguage from '../../common/hooks/useIsChineseLanguage';

type HeaderLinks = {
  id: string;
  link: string;
}[];

const headerLinks: HeaderLinks = [
  {
    id: 'articles',
    link: '/articles',
  },
];

function Header() {
  const { t } = useTranslation('common');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useBodyScrollHiden(isMobileMenuOpen);

  return (
    <>
      <header className={clsx('header', {
        'header--zh': useIsChineseLanguage(),
      })}
      >
        <div className="container header__inner">
          <Link href="/">
            <a
              className="header__logo"
              aria-label="Header logo"
            >
              <IconLogo />
            </a>
          </Link>

          <div className="header__right-panel">
            <button
              type="button"
              className="header__menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open header"
            >
              <IconBurger />
            </button>

            <div className="header__desktop">
              {headerLinks.map((headerLink) => (
                <Link key={headerLink.id} href={headerLink.link}>
                  <a className="header__link">
                    {t(headerLink.id)}
                  </a>
                </Link>
              ))}

              <LangSwitch />
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <MobileMenu onCloseClick={() => setIsMobileMenuOpen(false)} headerLinks={headerLinks} />
      )}
    </>
  );
}

export default Header;
