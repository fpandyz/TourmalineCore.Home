export default function Footer() {
  return (
    <footer className="footer" itemScope itemType="http://schema.org/Organization">
      <div className="container footer__inner">
        <span className="footer__copyright">
          <span className="footer__years">
            2019-
            {new Date().getFullYear()}
            {' '}
          </span>
          <span className="footer__name" itemProp="name">
            Tourmaline Core&nbsp;
          </span>
        </span>
        <a href="mailto:john@example.com" className="footer__contacts" itemProp="email">
          contact@tourmalinecore.com
        </a>
      </div>
    </footer>
  );
}
