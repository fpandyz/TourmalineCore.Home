import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';

import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { OptionYM } from '../../types/globals';

const cookieAccept = 'cookieAccept';

const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
const googleId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';

export const optionYandexMetrika: OptionYM = {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
};

function Cookie() {
  const { t } = useTranslation('cookie');
  const [isCookie, setIsCookie] = useState(true);

  useEffect(() => {
    if (typeof getCookie(cookieAccept) === 'boolean') {
      setIsCookie(true);
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

            window.gtag('js', new Date());
            window.gtag('config', googleId);

            window.ym(Number(yandexId), 'init', optionYandexMetrika);
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
