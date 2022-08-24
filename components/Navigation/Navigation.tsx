import { useTranslation } from 'next-i18next';
import { Link as ScrollLink } from 'react-scroll';

import { NavigationLinks } from '../../utils/consts/navigation';

function Navigation({
  navigationLinks,
}: {
  navigationLinks: NavigationLinks[];
}) {
  const { t } = useTranslation('navigation');

  return (
    <div className="navigation container section">
      <div className="navigation__line" />
      <div className="navigation__links">
        {navigationLinks.map((link) => (
          <ScrollLink
            key={link}
            className="navigation__link"
            activeClass="navigation__link--active"
            smooth
            spy
            to={link}
          >
            {t(link)}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
