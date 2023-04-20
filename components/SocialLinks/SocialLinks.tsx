import clsx from 'clsx';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import IconMail from '../../icons/mail.svg';
import IconTelegram from '../../icons/telegram.svg';

function SocialLinks() {
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
        <IconMail />
        <span className="social-links__mail">
          contact@tourmalinecore.com
        </span>
      </a>

      <a
        className="social-links__link"
        href="https://t.me/tourmalinecore"
        target="_blank"
        rel="noreferrer"
      >
        <IconTelegram />
        <span className="social-links__telegram">
          @tourmalinecore
        </span>
      </a>
    </div>
  );
}

export default SocialLinks;
