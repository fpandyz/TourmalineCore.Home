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
          <h3 className="hero-block-technology__title">{t('title')}</h3>
          <div className="hero-block-technology__description">{t('description')}</div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={`hero-block-technology__button hero-block-technology__button--${slicePathname}`}
          >
            {t('buttonText')}
          </button>
        </div>
        <div className={`hero-block-technology__image hero-block-technology__image--${slicePathname}`} />
      </div>
      {isOpen && <FormTechnologyModal setIsOpen={setIsOpen} />}
    </section>
  );
}

export default HeroBlockTechnology;
