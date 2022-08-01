import IconMail from '../../icons/mail.svg';
import IconTelegram from '../../icons/telegram.svg';

function FooterLinks() {
  return (
    <>
      <a className="footer-links__link" href="mailto:contact@tourmalinecore.com">
        <IconMail />
        <span className="title-type-4 footer-links__mail">
          contact@tourmalinecore.com
        </span>
      </a>

      {/* Добавить, когда будет телега */}
      <a className="footer-links__link" href="/">
        <IconTelegram />
        <span className="title-type-4 footer-links__telegram">
          @tourmalinecore
        </span>
      </a>
    </>
  );
}

export default FooterLinks;
