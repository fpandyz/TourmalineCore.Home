import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useBodyScrollHidden } from '../../common/hooks/useBodyScrollHiden';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { FormTechnologyModal } from '../FormTechnologyModal/FormTechnologyModal';
import { TechnologyPageAnchorLink } from '../../common/enums';
import { usePath } from '../../common/hooks';

export function Cta() {
  const {
    slicePathname,
  } = usePath();
  const [isOpen, setIsOpen] = useState(false);

  const {
    t,
  } = useTranslation(`cta`);

  useBodyScrollHidden(isOpen);

  return (
    <section
      id={TechnologyPageAnchorLink.Cta}
      className="cta"
    >
      <div className="container cta__wrapper">
        <div className={`cta__inner cta__inner--${slicePathname}`}>
          <h2 className="title-technology-type-1 cta__title">{t(`title`)}</h2>
          <PrimaryButton
            onClick={() => setIsOpen(true)}
            className={`cta__button cta__button--${slicePathname}`}
          >
            {t(`buttonText`)}
          </PrimaryButton>
          <div className="cta__image" />
        </div>
      </div>
      {isOpen && <FormTechnologyModal setIsOpen={setIsOpen} />}
    </section>
  );
}
