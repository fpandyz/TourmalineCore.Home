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
    <div className="navigation">
      {navigationLinks.map((link) => (
        <ScrollLink
          key={link}
          className="navigation__link"
          activeClass="navigation__link--active"
          smooth
          spy
          to={link}
          offset={-200}
        >
          {t(link)}
        </ScrollLink>
      ))}
    </div>
  );
}

export default Navigation;
