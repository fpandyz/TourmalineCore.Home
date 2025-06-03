import { useTranslation } from 'next-i18next';

import { useEffect, useState } from 'react';
import { FooterNavigationListRedesign } from './components/FooterNavigationListRedesign/FooterNavigationListRedesign';
import Link from 'next/link';

export type FooterNavigationList = {
  caption: string,
  links: {
    label: string,
    path: string,
  }[],
}

function FooterRedesign() {
  const { t } = useTranslation('footerRedesign');
  const [date, setDate] = useState<number>();

  const FooterNavigationLists: FooterNavigationList[] = t('navigationLists', { returnObjects: true });

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer
      // CHECK: Что по идшке?
      id="footerRedesign"
      className="footerRedesign"
      // CHECK: Что это?
      itemScope
      itemType="http://schema.org/Organization"
    >
      <div className="container-redesign footerRedesign__inner">
        <div className="footerRedesign__left">
          <div className="footerRedesign__info">
            <span className='footerRedesign__caption'>{t('infoCaption')}</span>
            <Link href={`mailto:${t('email')}`}>
              {/* TODO: Change when next will be upgrade to 12+ version */}
              <a className='footerRedesign__email'>{t('email')}</a>
            </Link>
          </div>
          <div className="footerRedesign__copyright">
            <span>
              {`© 2019-${date} Tourmaline Core`}
            </span>
          </div>
        </div>
        <ul className="footerRedesign__right">
          {FooterNavigationLists?.map((el, index) => (
            <FooterNavigationListRedesign
              key={index}
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
