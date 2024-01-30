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
import { AppRoute } from '../../common/utils/consts/app-route';

type HeaderLinks = {
  id: string;
  link: string;
}[];

const headerLinks: HeaderLinks = [
  {
    id: AppRoute.Frontend.slice(1),
    link: AppRoute.Frontend,
  },
  {
    id: AppRoute.Design.slice(1),
    link: AppRoute.Design,
  },
  {
    id: AppRoute.Articles.slice(1),
    link: AppRoute.Articles,
  },
];

function Header() {
  const { t } = useTranslation('common');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useRouter();

  const burgerIcon = getBurgerIcon(pathname);

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
              {burgerIcon}
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

  function getBurgerIcon(page: string) {
    switch (page) {
      case AppRoute.Frontend:
        return <IconBurgerFrontend />;

      default:
        return <IconBurger />;
    }
  }
}

export default Header;
