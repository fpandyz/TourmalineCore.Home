import { Link } from 'react-scroll';
import { clsx } from 'clsx';
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
  return (
    <Link
      spy
      to={to}
      className={clsx('navigation__link', {
        'navigation__link--zh': isChineseLanguage(),
      })}
      activeClass="navigation__link--active"
      hashSpy
      smooth
      onSetActive={() => {
        setIsSeeNavigation(true);
      }}
      onSetInactive={() => {
        if (index === 0) {
          setIsSeeNavigation(false);
        }
      }}
    >
      {text}
    </Link>
  );
}

export default ScrollLink;
