import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  useState, useRef,
} from 'react';
import clsx from 'clsx';

import { useAutoClose } from '../../common/hooks/useAutoClose';
import IconRussianFlag from '../../icons/flag-for-russia.svg';
import IconUSAFlag from '../../icons/flag-for-united-states.svg';
import IconDownArrow from '../../icons/icon-down-arrow.svg';

type Languages = {
  [key: string]: {
    name: string;
    icon: () => JSX.Element;
  }
};

const languages: Languages = {
  en: {
    name: 'English',
    icon: () => <IconUSAFlag className="lang-switch__icon" />,
  },
  ru: {
    name: 'Русский',
    icon: () => <IconRussianFlag className="lang-switch__icon" />,
  },
};

export default function LangSwitch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [isTooltipOpened, setIsTooltipOpened] = useState(false);

  useAutoClose(containerRef, setIsTooltipOpened);

  return (
    <div ref={containerRef} className="lang-switch">
      <button
        type="button"
        className="lang-switch__active"
        onClick={() => setIsTooltipOpened(!isTooltipOpened)}
      >
        {router.locale
          && languages[router.locale].icon()}
        {router.locale}
        <IconDownArrow className="lang-switch__icon-down-arrow" />
      </button>

      {router.locales && isTooltipOpened && (
        <ul className="lang-switch__list">
          {router.locales.map((locale) => (
            <li
              key={locale}
              className="lang-switch__option"
            >
              <Link
                href={{
                  pathname: router.pathname,
                  query: router.query,
                }}
                locale={locale}
              >
                <a
                  className={clsx(
                    'lang-switch__link',
                    { 'lang-switch__link--active': router.locale === locale },
                  )}
                >
                  {languages[locale].icon()}
                  {languages[locale].name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
