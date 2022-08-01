import { useTranslation } from 'next-i18next';

import IconLogo from '../../icons/logo.svg';
import FooterLinks from '../FooterLinks/FooterLinks';

function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer className="footer" itemScope itemType="http://schema.org/Organization">
      <div className="container footer__inner">
        <div className="footer__about-us">
          <div className="footer__logo">
            <IconLogo />
            <span className="footer__discription">{t('discription')}</span>
          </div>

          <div className="footer__links">
            <span>{t('writeUs')}</span>
            <FooterLinks />
          </div>
        </div>

        <div className="footer__copyright">
          <span>
            {`© 2019-${new Date().getFullYear()} Tourmaline Core`}
          </span>
          <span className="footer__location">
            {t('location')}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
