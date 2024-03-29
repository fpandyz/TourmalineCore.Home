import { Link } from 'react-scroll';
import { clsx } from 'clsx';
import { useState } from 'react';
import isChineseLanguage from '../../../../common/utils/isChineseLanguage';

function ScrollLink({
  index,
  text,
  to,
  setIsSeeNavigation,
}: {
  index: number;
  text: string;
  to: string;
  setIsSeeNavigation: (value: boolean) => unknown;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link
      spy
      to={to}
      className={clsx('navigation__link', {
        'navigation__link--active': isActive,
        'navigation__link--zh': isChineseLanguage(),
      })}
      hashSpy
      smooth
      onSetActive={() => {
        setIsSeeNavigation(true);
        setIsActive(true);
      }}
      onSetInactive={() => {
        if (index === 0) {
          setIsSeeNavigation(false);
        }

        setIsActive(false);
      }}
    >
      {text}
    </Link>
  );
}

export default ScrollLink;
