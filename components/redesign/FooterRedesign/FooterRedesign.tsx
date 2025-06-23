import { useTranslation } from 'next-i18next';

import { FooterNavigationList, FooterNavigationListRedesign } from './components/FooterNavigationListRedesign/FooterNavigationListRedesign';

export function FooterRedesign() {
  const {
    t,
  } = useTranslation(`footerRedesign`);

  const footerNavigationLists: FooterNavigationList[] = t(`navigationLists`, {
    returnObjects: true,
  });

  return (
    <footer
      id="footer-redesign"
      className="footer-redesign"
    >
      <div className="container-redesign footer-redesign__inner">
        <div className="footer-redesign__info">
          <span className="footer-redesign__caption">{t(`infoCaption`)}</span>
          {/* TODO: Change when next will be upgrade to 12+ version */}
          <a
            className="footer-redesign__email"
            href={`mailto:${t(`email`)}`}
          >
            {t(`email`)}
          </a>
        </div>
        <div className="footer-redesign__copyright">
          <span>
            {`© 2019-${new Date()
              .getFullYear()} Tourmaline Core`}
          </span>
        </div>
        <ul className="footer-redesign__navigation">
          {footerNavigationLists.map((el) => (
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
