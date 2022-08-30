import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { MouseEventHandler } from 'react';

import SocialLinks from '../SocialLinks/SocialLinks';
import MobileLangSwitch from '../MobileLangSwitch/MobileLangSwitch';

import IconLogo from '../../icons/logo.svg';
import IconClose from '../../icons/close.svg';

type HeaderLinks = {
  id: string;
  link: string;
}[];

type MobileMenuProps = {
  headerLinks: HeaderLinks;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

function MobileMenu({
  headerLinks,
  onCloseClick,
}: MobileMenuProps) {
  const { t } = useTranslation('common');

  return (
    <div className="mobile-menu">
      <div className="container mobile-menu__inner">
        <div className="mobile-menu__top">
          <Link href="/">
            <a className="mobile-menu__logo">
              <span onClick={onCloseClick} aria-hidden="true">
                <IconLogo />
              </span>
            </a>
          </Link>

          <button
            type="button"
            className="mobile-menu__close"
            onClick={onCloseClick}
            aria-label="Close header"
          >
            <IconClose />
          </button>
        </div>

        <div className="mobile-menu__tourmaline-core">
          <Image
            src="/images/tourmaline-core.png"
            alt="tourmaline-core"
            layout="fill"
            loading="lazy"
          />
        </div>

        <div className="mobile-menu__content">
          <MobileLangSwitch />

          {headerLinks.map((headerLink) => (
            <Link key={headerLink.id} href={headerLink.link}>
              <a className="mobile-menu__link">
                <span className="title-type-2" onClick={onCloseClick} aria-hidden="true">
                  {t(headerLink.id)}
                </span>
              </a>
            </Link>
          ))}
        </div>

        <div className="mobile-menu__footer">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
