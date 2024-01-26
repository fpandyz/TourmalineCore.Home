import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';
import FormTechnologyModal from '../FormTechnologyModal/FormTechnologyModal';
import { AppRoute } from '../../common/utils/app-route';

function HeroBlockTechnology() {
  const { pathname } = useRouter();
  const { t } = useTranslation(getTranslationNamespace(pathname));
  const [isOpen, setIsOpen] = useState(false);

  const slicePathname = pathname.slice(1);

  useBodyScrollHiden(isOpen);

  return (
    <section className={clsx('hero-block-technology', {
      'hero-block-technology--zh': isChineseLanguage(),
    })}
    >
      <div className="container hero-block-technology__wrapper">
        <div className="hero-block-technology__inner">
          <h3 className="hero-block-technology__title">{t('title')}</h3>
          <div className="hero-block-technology__description">{t('description')}</div>
          <PrimaryButton
            onClick={() => setIsOpen(true)}
            className={`hero-block-technology__button hero-block-technology__button--${slicePathname}`}
          >
            {t('buttonText')}
          </PrimaryButton>
        </div>
        <div className={`hero-block-technology__image hero-block-technology__image--${slicePathname}`} />
      </div>
      {isOpen && <FormTechnologyModal setIsOpen={setIsOpen} />}
    </section>
  );

  function getTranslationNamespace(page: string) {
    switch (page) {
      case AppRoute.Frontend:
        return 'heroFrontend';

      default:
        return '';
    }
  }
}

export default HeroBlockTechnology;
