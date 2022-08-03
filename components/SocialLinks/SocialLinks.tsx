import IconMail from '../../icons/mail.svg';
import IconTelegram from '../../icons/telegram.svg';

function SocialLinks() {
  return (
    <>
      <a className="social-links__link" href="mailto:contact@tourmalinecore.com">
        <IconMail />
        <span className="social-links__mail">
          contact@tourmalinecore.com
        </span>
      </a>

      <a className="social-links__link" href="https://t.me/@fpandyz">
        <IconTelegram />
        <span className="social-links__telegram">
          @tourmalinecore
        </span>
      </a>
    </>
  );
}

export default SocialLinks;
