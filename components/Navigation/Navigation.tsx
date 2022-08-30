import { useTranslation } from 'next-i18next';
import {
  useState, useEffect, useRef,
} from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { clsx } from 'clsx';

import { NavigationLinks } from '../../utils/consts/navigation';
import useDeviceSize from '../../common/hooks/useDeviceSize';

function Navigation({
  navigationLinks,
  offset,
}: {
  navigationLinks: NavigationLinks[];
  offset: number;
}) {
  const { t } = useTranslation('navigation');
  const [top, setTop] = useState('0');

  const [isSeeNavigation, setIsSeeNavigation] = useState(false);

  const linksRef = useRef<HTMLInputElement>(null);

  const deviceSize = useDeviceSize();

  useEffect(() => {
    if (linksRef.current) {
      setTop(`${deviceSize.height / 2 - linksRef.current.clientHeight / 2}px`);
    }
  }, [deviceSize]);

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
        {navigationLinks.map((link, index) => {
          const scrollerTo = scroller;
          scrollerTo(`${link} div`);
          return (
            <ScrollLink
              key={link}
              className="navigation__link"
              activeClass="navigation__link--active"
              smooth
              spy
              to={link}
              onSetActive={() => setIsSeeNavigation(true)}
              onSetInactive={() => (index === 0 ? setIsSeeNavigation(false) : null)}
              offset={offset}
            >
              {t(link)}
            </ScrollLink>
          );
        })}
      </div>
    </div>
  );
}

export default Navigation;
