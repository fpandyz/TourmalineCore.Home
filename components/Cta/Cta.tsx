import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import FormTechnologyModal from '../FormTechnologyModal/FormTechnologyModal';
import usePath from '../../common/hooks/usePath';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';

export default function Cta() {
  const { slicePathname } = usePath();
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation('cta');

  useBodyScrollHiden(isOpen);

  return (
    <section
      id={TechnologyPageAnchorLink.cta}
      className="cta"
    >
      <div className="container cta__wrapper">
        <div className={`cta__inner cta__inner--${slicePathname}`}>
          <h3 className="title-technology-type-1 cta__title">{t('title')}</h3>
          <PrimaryButton onClick={() => setIsOpen(true)} className={`cta__button cta__button--${slicePathname}`}>
            {t('buttonText')}
          </PrimaryButton>
          <div className="cta__image" />
        </div>
      </div>
      {isOpen && <FormTechnologyModal setIsOpen={setIsOpen} />}
    </section>
  );
}
