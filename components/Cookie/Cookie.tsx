import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';

import PrimaryButton from '../PrimaryButton/PrimaryButton';

const cookieAccept = 'cookieAccept';

declare global {
  interface Window {
    ym: (id: number, funcName: string, option: any) => unknown;
    gtag: (config: string, id: string) => unknown;
  }
}

function Cookie() {
  const { t } = useTranslation('cookie');
  const [isCookie, setIsCookie] = useState(true);

  useEffect(() => {
    if (typeof getCookie(cookieAccept) === 'boolean') {
      setIsCookie(false);
    } else {
      setIsCookie(false);
    }
  }, []);

  if (isCookie) {
    return null;
  }

  return (
    <div className="cookie">
      <div className="cookie__inner">
        <div className="cookie__text">
          {t('text')}
        </div>

        <PrimaryButton
          className="cookie__accept"
          onClick={() => {
            setCookie(cookieAccept, true);

            window.ym(89913543, 'init', {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
            });

            window.gtag('config', 'UA-171018032-1');
          }}
        >
          {t('accept')}
        </PrimaryButton>
        <PrimaryButton
          className="cookie__reject"
          onClick={() => {
            setCookie(cookieAccept, false);
          }}
        >
          {t('reject')}
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Cookie;
