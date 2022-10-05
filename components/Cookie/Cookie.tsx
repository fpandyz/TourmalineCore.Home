import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';

import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { getLSItem, setLSItem } from '../../common/utils/localStorageHelpers';

const COOKIE_LS_KEY = 'cookie';
const cookieAccept = 'cookieAccept';

function Cookie() {
  const { t } = useTranslation('cookie');
  const [isCookie, setIsCookie] = useState(true);

  useEffect(() => {
    setIsCookie(getLSItem(COOKIE_LS_KEY));
    console.log('cookie =', getCookie('cookieAccept'));
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
            // setIsCookie(true);
            // setLSItem(COOKIE_LS_KEY, true);
            setCookie(cookieAccept, true);
          }}
        >
          {t('accept')}
        </PrimaryButton>
        <PrimaryButton
          className="cookie__reject"
          onClick={() => {
            // setIsCookie(true);
            // setLSItem(COOKIE_LS_KEY, true);
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
