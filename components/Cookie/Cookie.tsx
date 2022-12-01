import { Trans, useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { Router, useRouter } from 'next/router';

import clsx from 'clsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { OptionYM } from '../../types/globals';
import ExternalLink from '../ExternalLink/ExternalLink';
import isChineseLanguage from '../../common/utils/isChineseLanguage';

const cookieAccept = 'cookieAccept';

const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
const googleId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';

export const optionYandexMetrika: OptionYM = {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
};

function Cookie({
  routerApp,
}: {
  routerApp: Router,
}) {
  const { t } = useTranslation('cookie');
  const [isCookie, setIsCookie] = useState(true);

  const isProduction = process.env.NODE_ENV === 'production';

  routerApp.events?.on('routeChangeComplete', (url: string) => {
    if (document.cookie.includes('cookieAccept=true') && typeof window !== 'undefined' && isProduction) {
      window.gtag('event', url, { send_to: googleId });
      window.ym(Number(yandexId), 'hit', url);
    }
  });

  const router = useRouter();

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
    <div className={clsx('cookie', {
      'cookie--zh': isChineseLanguage(),
    })}
    >
      <div className="cookie__inner">
        <div className="cookie__text">
          <Trans
            i18nKey="cookie:text"
            components={{
              bolt: <ExternalLink
                className="cookie__link"
                href={`documents/cookie-information-${router.locale}.pdf`}
                target="_blank"
                rel="noreferrer"
              />,
            }}
          />
        </div>

        <PrimaryButton
          className="cookie__accept"
          onClick={acceptCookie}
        >
          {t('accept')}
        </PrimaryButton>
        <PrimaryButton
          className="cookie__reject"
          onClick={rejectCookie}
        >
          {t('reject')}
        </PrimaryButton>
      </div>
    </div>
  );

  function acceptCookie() {
    setCookie(cookieAccept, true);
    setIsCookie(true);

    if (isProduction) {
      window.gtag('js', new Date());
      window.gtag('config', googleId);

      window.ym(Number(yandexId), 'init', optionYandexMetrika);
    }
  }

  function rejectCookie() {
    setCookie(cookieAccept, false);
    setIsCookie(true);
  }
}

export default Cookie;
