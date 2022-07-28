import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import LangSwitch from '../LangSwitch/LangSwitch';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';

function Header() {
  const { t } = useTranslation('common');

  return (
    <header className="header">
      <div className="container header__inner">
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
      <Input label="Почта" description="Чтобы мы могли связаться с вами" />
      <Textarea label="Сообщение" description="Тут можно задать вопрос, рассказать немного о себе, своем бизнесе или задаче, с которой мы можем вам помочь" />
    </header>
  );
}

export default Header;
