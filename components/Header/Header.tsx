import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import LangSwitch from '../LangSwitch/LangSwitch';
import MobileMenu from '../MobileMenu/MobileMenu';

import IconLogo from '../../icons/logo.svg';
import IconBurger from '../../icons/burger.svg';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';

type HeaderLinks = {
  id: string;
  link: string;
}[];

const headerLinks: HeaderLinks = [
  {
    id: 'ourCompany',
    link: '/',
  },
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
            <a className="header__logo">
              <IconLogo />
            </a>
          </Link>

          <div className="header__right-panel">
            <button type="button" className="header__menu-toggle" onClick={() => setIsMobileMenuOpen(true)}>
              <IconBurger />
            </button>

            <div className="header__desktop body-type-2">
              {headerLinks.map((headerLink) => (
                <Link key={headerLink.id} href={headerLink.link}>
                  <a className="header__link">
                    {t(headerLink.id)}
                  </a>
                </Link>
              ))}

              <LangSwitch className="header__lang" />
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
