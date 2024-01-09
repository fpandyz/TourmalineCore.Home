import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LangSwitch from '../LangSwitch/LangSwitch';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';

import IconBurger from '../../icons/burger.svg';
import IconBurgerFrontend from '../../icons/burger-frontend.svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import isChineseLanguage from '../../common/utils/isChineseLanguage';

type HeaderLinks = {
  id: string;
  link: string;
}[];

enum HeaderId {
  Frontend = 'frontend',
  Articles = 'articles',
}

const headerLinks: HeaderLinks = [
  {
    id: HeaderId.Frontend,
    link: `/${HeaderId.Frontend}`,
  },
  {
    id: HeaderId.Articles,
    link: `/${HeaderId.Articles}`,
  },
];

function Header() {
  const { t } = useTranslation('common');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useRouter();

  useBodyScrollHiden(isMobileMenuOpen);

  return (
    <>
      <header className={clsx('header', {
        'header--zh': isChineseLanguage(),
      })}
      >
        <div className="container header__inner">
          <Link href="/">
            <a
              className="header__logo"
              aria-label="Header logo"
            >
              <Image
                src="/images/logo.png"
                layout="fill"
              />
            </a>
          </Link>

          <div className="header__right-panel">
            <button
              type="button"
              className="header__menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open header"
            >
              { pathname === `/${HeaderId.Frontend}` ? <IconBurgerFrontend /> : <IconBurger />}
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
