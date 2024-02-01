import clsx from 'clsx';
import { useState } from 'react';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';
import FormTechnologyModal from '../FormTechnologyModal/FormTechnologyModal';
import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import usePath from '../../common/hooks/usePath';
import { AppRoute } from '../../common/utils/consts/app-route';

const heroImages = new Map([
  [
    AppRoute.Frontend, {
      mobile: '/images/hero-block-frontend-element-mobile.png',
      tablet: '/images/hero-block-frontend-element-tablet.png',
      desktop: '/images/hero-block-frontend-element-desktop.png',
    },
  ],
  [
    AppRoute.Design, {
      mobile: '/images/hero-block-design-element-mobile.png',
      tablet: '/images/hero-block-design-element-tablet.png',
      desktop: '/images/hero-block-design-element-desktop.png',
    },
  ],
]);

function HeroBlockTechnology() {
  const { slicePathname, pathname } = usePath();
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslationNamespace('hero');

  const heroImage = heroImages.get(pathname as AppRoute);

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
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={`hero-block-technology__button hero-block-technology__button--${slicePathname}`}
          >
            <span className="hero-block-technology__button-text">{t('buttonText')}</span>
          </button>
        </div>
        <picture className={`hero-block-technology__image hero-block-technology__image--${slicePathname}`}>
          <source
            srcSet={heroImage?.desktop}
            media="(min-width: 1024px)"
          />
          <source
            srcSet={heroImage?.tablet}
            media="(min-width: 768px)"
          />
          <img srcSet={heroImage?.mobile} alt="heroImage" />
        </picture>
      </div>
      {isOpen && <FormTechnologyModal setIsOpen={setIsOpen} />}
    </section>
  );
}

export default HeroBlockTechnology;
