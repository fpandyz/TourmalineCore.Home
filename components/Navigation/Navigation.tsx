import { useTranslation } from 'next-i18next';
import {
  useState, useEffect, useRef,
} from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { clsx } from 'clsx';

import useOffset from '../../common/hooks/useOffset';
import { NavigationLinks } from '../../utils/consts/navigation';

function Navigation({
  navigationLinks,
}: {
  navigationLinks: NavigationLinks[];
}) {
  const { t } = useTranslation('navigation');
  const [top, setTop] = useState('0');

  const [isSeeNavigation, setIsSeeNavigation] = useState(false);

  const offset = useOffset();

  const linksRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (linksRef.current) {
      setTop(`${window.innerHeight / 2 - linksRef.current.clientHeight / 2}px`);
    }
  }, []);

  return (
    <div className={clsx('container section navigation', {
      'navigation--is-see': isSeeNavigation,
    })}
    >
      <div className="navigation__line" />
      <div
        className="navigation__links"
        ref={linksRef}
        style={{
          top,
        }}
      >
        {navigationLinks.map((link, index) => (
          <ScrollLink
            key={link}
            className="navigation__link"
            activeClass="navigation__link--active"
            smooth
            spy
            to={link}
            offset={offset}
            onSetActive={() => setIsSeeNavigation(true)}
            onSetInactive={() => (index === 0 ? setIsSeeNavigation(false) : null)}
          >
            {t(link)}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
