import clsx from 'clsx';
import { useState } from 'react';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';
import FormTechnologyModal from '../FormTechnologyModal/FormTechnologyModal';
import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import usePath from '../../common/hooks/usePath';

function HeroBlockTechnology() {
  const { slicePathname } = usePath();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslationNamespace('hero');

  useBodyScrollHiden(isOpen);

  return (
    <section className={clsx('hero-block-technology', {
      'hero-block-technology--zh': isChineseLanguage(),
    })}
    >
      <div className="container hero-block-technology__wrapper">
        <div className="hero-block-technology__inner">
          <h1 className="hero-block-technology__title">{t('title')}</h1>
          <h2 className="hero-block-technology__description">{t('description')}</h2>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={`hero-block-technology__button hero-block-technology__button--${slicePathname}`}
          >
            <span className="hero-block-technology__button-text">{t('buttonText')}</span>
          </button>
        </div>
        <picture className="hero-block-technology__image">
          <source
            srcSet={`/images/hero-${slicePathname}-element-desktop.webp`}
            media="(min-width: 1024px)"
          />
          <source
            srcSet={`/images/hero-${slicePathname}-element-tablet.webp`}
            media="(min-width: 768px)"
          />
          <img srcSet={`/images/hero-${slicePathname}-element-mobile.webp`} alt="heroImage" />
        </picture>
      </div>
      {isOpen && <FormTechnologyModal setIsOpen={setIsOpen} />}
    </section>
  );
}

export default HeroBlockTechnology;
