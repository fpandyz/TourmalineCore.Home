import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { LangSwitch } from './components/LangSwitch/LangSwitch';
import { useBodyScrollHidden } from '../../common/hooks/useBodyScrollHiden';

import IconBurger from '../../icons/burger.svg';
import IconBurgerPurple from '../../icons/burger-purple.svg';
import IconBurgerMagenta from '../../icons/burger-magenta.svg';
import IconBurgerDesign from '../../icons/burger-design.svg';
import IconBurgerQA from '../../icons/burger-qa.svg';
import IconBurgerBackend from '../../icons/burger-backend.svg';
import IconBurgerCyan from '../../icons/burger-cyan.svg';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { isChineseLanguage } from '../../common/utils/isChineseLanguage';
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
    id: AppRoute.Ml.slice(1),
    link: AppRoute.Ml,
  },
  {
    id: AppRoute.Embedded.slice(1),
    link: AppRoute.Embedded,
  },
  {
    id: AppRoute.QA.slice(1),
    link: AppRoute.QA,
  },
  {
    id: AppRoute.Backend.slice(1),
    link: AppRoute.Backend,
  },
  {
    id: AppRoute.Teams.slice(1),
    link: AppRoute.Teams,
  },
  {
    id: AppRoute.FrontendTeam.slice(1),
    link: AppRoute.FrontendTeam,
  },
  {
    id: AppRoute.Articles.slice(1),
    link: AppRoute.Articles,
  },
];

const BURGER_ICONS = new Map(
  [
    [AppRoute.Frontend, <IconBurgerPurple />],
    [AppRoute.Ml, <IconBurgerPurple />],
    [AppRoute.Embedded, <IconBurgerMagenta />],
    [AppRoute.QA, <IconBurgerQA />],
    [AppRoute.Backend, <IconBurgerBackend />],
    [AppRoute.Design, <IconBurgerDesign />],
    [AppRoute.Teams, <IconBurgerPurple />],
    [AppRoute.FrontendTeam, <IconBurgerCyan />],
    [AppRoute.Main, <IconBurger />],
    [AppRoute.Articles, <IconBurger />],
  ],
);

export function Header({
  containerClass,
}: {
  containerClass?: string;
}) {
  const { t } = useTranslation('common');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useRouter();

  useBodyScrollHidden(isMobileMenuOpen);

  return (
    <>
      <header className={clsx('header', {
        'header--zh': isChineseLanguage(),
      })}
      >
        <div className={clsx(`container header__inner ${containerClass}`)}>
          <Link href="/">
            <a
              className="header__logo"
              aria-label="Header logo"
            >
              <Image
                src="/images/logo.png"
                layout="fill"
                alt=""
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
              {BURGER_ICONS.get(pathname as AppRoute)}
            </button>

            <nav className="header__desktop">
              {headerLinks.map((headerLink) => (
                <Link key={headerLink.id} href={headerLink.link}>
                  <a className="header__link">
                    {t(headerLink.id)}
                  </a>
                </Link>
              ))}

              <LangSwitch />
            </nav>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <MobileMenu
          onCloseClick={() => setIsMobileMenuOpen(false)}
          headerLinks={headerLinks}
        />
      )}
    </>
  );
}
