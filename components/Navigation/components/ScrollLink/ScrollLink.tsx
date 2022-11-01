import { Link } from 'react-scroll';
import { clsx } from 'clsx';
import { useState } from 'react';
import isChineseLanguage from '../../../../common/utils/isChineseLanguage';

function ScrollLink({
  index,
  text,
  to,
  setIsSeeNavigation,
  scrollTo,
}: {
  index: number;
  text: string;
  to: string;
  setIsSeeNavigation: (value: boolean) => unknown;
  scrollTo: () => unknown;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Link
        spy
        to={to}
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
      />
      <button
        type="button"
        className={clsx('navigation__link', {
          'navigation__link--active': isActive,
          'navigation__link--zh': isChineseLanguage(),
        })}
        onClick={scrollTo}
      >
        {text}
      </button>
    </>
  );
}

export default ScrollLink;
