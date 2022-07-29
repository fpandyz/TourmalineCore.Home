import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import LangSwitch from '../LangSwitch/LangSwitch';
import Button from '../Button/Button';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import ExternalLink from '../ExternalLink/ExternalLink';

function Header() {
  const { t } = useTranslation('common');

  return (
    <header className="header">
      <div className="container header__inner">
        <Button>Button</Button>
        <SecondaryButton />
        <ExternalLink>link</ExternalLink>
        <Link href="/">
          <a className="header__logo">
            <img
              src="/images/just-logo.png"
              className="header__logo-img"
              width="28px"
              alt="Logo of Tourmaline Core"
            />

            <h1 className="header__logo-text">{t('title')}</h1>
          </a>
        </Link>

        <LangSwitch className="header__lang" />
      </div>
    </header>
  );
}

export default Header;
