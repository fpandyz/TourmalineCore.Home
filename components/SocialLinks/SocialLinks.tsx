import clsx from 'clsx';
import { useRouter } from 'next/router';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import IconMail from '../../icons/mail.svg';
import IconMailPurple from '../../icons/mail-frontend.svg';
import IconMailDesign from '../../icons/mail-design.svg';
import IconMailEmbedded from '../../icons/mail-embedded.svg';
import IconMailQA from '../../icons/mail-qa.svg';
import IconMailBackend from '../../icons/mail-backend.svg';
import IconTelegram from '../../icons/telegram.svg';
import IconTelegramPurple from '../../icons/telegram-frontend.svg';
import IconTelegramDesign from '../../icons/telegram-design.svg';
import IconTelegramEmbedded from '../../icons/telegram-embedded.svg';
import IconTelegramQA from '../../icons/telegram-qa.svg';
import IconTelegramBackend from '../../icons/telegram-backend.svg';
import { AppRoute } from '../../common/utils/consts/app-route';

function SocialLinks() {
  const { pathname } = useRouter();

  const icons = getIcons(pathname);
  const notMainPage = pathname !== AppRoute.Main;

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
        {icons.mail}
        <span className={clsx('social-links__mail', {
          'social-links__mail--technology': notMainPage,
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
        {icons.telegram}
        <span className={clsx('social-links__telegram', {
          'social-links__telegram--technology': notMainPage,
        })}
        >
          @tourmalinecore
        </span>
      </a>
    </div>
  );

  function getIcons(page: string) {
    switch (page) {
      case AppRoute.Ml:
      case AppRoute.Frontend:
        return {
          mail: <IconMailPurple />,
          telegram: <IconTelegramPurple />,
        };

      case AppRoute.Design:
        return {
          mail: <IconMailDesign />,
          telegram: <IconTelegramDesign />,
        };

      case AppRoute.Embedded:
        return {
          mail: <IconMailEmbedded />,
          telegram: <IconTelegramEmbedded />,
        };
      case AppRoute.QA:
        return {
          mail: <IconMailQA />,
          telegram: <IconTelegramQA />,
        };
      case AppRoute.Backend:
        return {
          mail: <IconMailBackend />,
          telegram: <IconTelegramBackend />,
        };

      default:
        return {
          mail: <IconMail />,
          telegram: <IconTelegram />,
        };
    }
  }
}

export default SocialLinks;
