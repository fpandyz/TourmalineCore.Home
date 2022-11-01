import { useTranslation } from 'next-i18next';
import {
  useState, useEffect, useRef,
} from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { clsx } from 'clsx';

import { NavigationLinks } from '../../common/utils/consts/navigation';
import useDeviceSize from '../../common/hooks/useDeviceSize';
import ScrollLink from './components/ScrollLink/ScrollLink';

function Navigation({
  navigationLinks,
}: {
  navigationLinks: NavigationLinks[];
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
  }, [deviceSize.width]);

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
            index={index}
            text={t(link)}
            to={link}
            setIsSeeNavigation={(value) => setIsSeeNavigation(value)}
            scrollTo={() => scrollTo(link)}
          />
        ))}
      </div>
    </div>
  );

  function scrollTo(to: string) {
    const element = document.querySelector(`[name="scroll-to-${to}"]`);

    if (!element) {
      return;
    }

    smoothscroll.polyfill();
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default Navigation;
