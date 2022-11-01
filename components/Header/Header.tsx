import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Image from 'next/image';
import LangSwitch from '../LangSwitch/LangSwitch';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';

import IconBurger from '../../icons/burger.svg';
import MobileMenu from '../MobileMenu/MobileMenu';

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
      <header className="header">
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
