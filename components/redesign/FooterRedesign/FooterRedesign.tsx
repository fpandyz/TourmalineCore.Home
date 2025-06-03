import { useTranslation } from 'next-i18next';

import { useEffect, useState } from 'react';
import { FooterNavigationList, FooterNavigationListRedesign } from './components/FooterNavigationListRedesign/FooterNavigationListRedesign';

function FooterRedesign() {
  const { t } = useTranslation('footerRedesign');
  const [date, setDate] = useState<number>();

  const FooterNavigationLists: FooterNavigationList[] = t('navigationLists', { returnObjects: true });

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer
      id="footerRedesign"
      className="footerRedesign"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container-redesign footerRedesign__inner">
        <div className="footerRedesign__info">
          <span className="footerRedesign__caption">{t('infoCaption')}</span>
          {/* TODO: Change when next will be upgrade to 12+ version */}
          <a
            className="footerRedesign__email"
            href={`mailto:${t('email')}`}
          >
            {t('email')}
          </a>
        </div>
        <div className="footerRedesign__copyright">
          <span>
            {`© 2019-${date} Tourmaline Core`}
          </span>
        </div>
        <ul className="footerRedesign__navigation">
          {FooterNavigationLists?.map((el) => (
            <FooterNavigationListRedesign
              key={el.caption}
              caption={el.caption}
              links={el.links}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default FooterRedesign;
