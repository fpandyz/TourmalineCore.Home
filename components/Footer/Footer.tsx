import { useTranslation } from 'next-i18next';

import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '../SocialLinks/SocialLinks';

function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer className="footer" itemScope itemType="http://schema.org/Organization">
      <div className="container footer__inner">
        <div className="footer__about-us">
          <div className="footer__short-information">
            <Link href="/">
              <a className="footer__logo" aria-label="Footer logo">
                <Image
                  src="/images/logo-new.png"
                  layout="fill"
                />
              </a>
            </Link>

            <span className="footer__description">{t('description')}</span>
          </div>

          <div className="footer__links">
            <span>{t('writeUs')}</span>
            <SocialLinks />
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
