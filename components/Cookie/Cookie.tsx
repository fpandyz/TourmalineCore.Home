import { Trans, useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import clsx from 'clsx';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { OptionYM } from '../../types/globals';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import { isChineseLanguage } from '../../common/utils';

const cookieAccept = `cookieAccept`;

const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
const googleId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ``;

export const optionYandexMetrika: OptionYM = {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
};

export function Cookie() {
  const {
    t,
  } = useTranslation(`cookie`);
  const router = useRouter();
  const [isCookie, setIsCookie] = useState(true);
  const [date, setDate] = useState<Date | null>(null);
  const isMetricsEnabled = process.env.METRICS_ENABLED === `true`;

  useEffect(() => {
    setDate(new Date());
    if (getCookie(cookieAccept) !== undefined) {
      setIsCookie(true);
    } else {
      setIsCookie(false);
    }
  }, []);

  if (isCookie) {
    return null;
  }

  return (
    <aside
      className={clsx(`cookie`, {
        'cookie--zh': isChineseLanguage(router.locale),
      })}
      data-testid="cookie"
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
          {t(`accept`)}
        </PrimaryButton>
        <PrimaryButton
          className="cookie__reject"
          onClick={rejectCookie}
        >
          {t(`reject`)}
        </PrimaryButton>
      </div>
    </aside>
  );

  function acceptCookie() {
    setCookie(cookieAccept, true);
    setIsCookie(true);

    if (isMetricsEnabled) {
      window.gtag(`js`, date);
      window.gtag(`config`, googleId);

      window.ym(Number(yandexId), `init`, optionYandexMetrika);
    }
  }

  function rejectCookie() {
    setCookie(cookieAccept, false);
    setIsCookie(true);
  }
}
