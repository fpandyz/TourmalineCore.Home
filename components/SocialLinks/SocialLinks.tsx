import clsx from 'clsx';
import { useRouter } from 'next/router';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import IconMail from '../../icons/mail.svg';
import IconMailFrontend from '../../icons/mail-frontend.svg';
import IconTelegram from '../../icons/telegram.svg';
import IconTelegramFrontend from '../../icons/telegram-frontend.svg';
import { AppRoute } from '../../common/utils/consts/app-route';

function SocialLinks() {
  const { pathname } = useRouter();

  return (
    <div className={clsx('social-links', {
      'social-links--zh': isChineseLanguage(),
    })}
    >
      <a
        className="social-links__link"
        href="mailto:contact@tourmalinecore.com"
        target="_blank"
        rel="noreferrer"
      >
        {pathname === AppRoute.Frontend ? <IconMailFrontend /> : <IconMail />}
        <span className={clsx('social-links__mail', {
          'social-links__mail--technology': pathname !== AppRoute.Main,
        })}
        >
          contact@tourmalinecore.com
        </span>
      </a>

      <a
        className="social-links__link"
        href="https://t.me/tourmalinecore"
        target="_blank"
        rel="noreferrer"
      >
        {pathname === AppRoute.Frontend ? <IconTelegramFrontend /> : <IconTelegram />}
        <span className={clsx('social-links__telegram', {
          'social-links__telegram--technology': pathname !== AppRoute.Main,
        })}
        >
          @tourmalinecore
        </span>
      </a>
    </div>
  );
}

export default SocialLinks;
