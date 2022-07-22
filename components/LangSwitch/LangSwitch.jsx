import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';

import { useAutoClose } from '../../common/hooks/useAutoClose';

export default function LangSwitch({
  className = '',
}) {
  const containerRef = useRef();
  const router = useRouter();

  const [isTooltipOpened, setIsTooltipOpened] = useState(false);

  useAutoClose(containerRef, setIsTooltipOpened);

  const availableLocales = router.locales.filter((locale) => locale !== router.locale);

  return (
    <div ref={containerRef} className={`lang-switch ${className}`}>
      <button
        type="button"
        className="lang-switch__active"
        onClick={() => setIsTooltipOpened(!isTooltipOpened)}
      >
        {router.locale}
      </button>

      {isTooltipOpened && (
        <ul className="lang-switch__list">
          {availableLocales.map((locale) => (
            <li key={locale} className="lang-switch__option">
              <Link
                href={{
                  pathname: router.pathname,
                  query: router.query,
                }}
                locale={locale}
              >
                <a className="lang-switch__link">{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
