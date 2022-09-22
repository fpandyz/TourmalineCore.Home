import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { getLSItem, setLSItem } from '../../common/utils/localStorageHelpers';

import PrimaryButton from '../PrimaryButton/PrimaryButton';

const COOKIE_LS_KEY = 'cookie';

function Cookie() {
  const { t } = useTranslation('cookie');
  const [isCookie, setIsCookie] = useState(true);

  useEffect(() => {
    setIsCookie(getLSItem(COOKIE_LS_KEY));
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
          className="cookie__button"
          onClick={() => {
            setIsCookie(true);
            setLSItem(COOKIE_LS_KEY, true);
          }}
        >
          {t('button')}
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Cookie;
