import { useRouter } from 'next/router';
import { useState } from 'react';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import FormTechnologyModal from '../FormTechnologyModal/FormTechnologyModal';

const CTA_TITLE = 'Расскажите нам о своей задаче';
const CTA_BUTTON_TEXT = 'Обсудить проект';

export default function Cta() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const slicePathname = pathname.slice(1);

  useBodyScrollHiden(isOpen);

  return (
    <section className="cta">
      <div className="container cta__wrapper">
        <div className={`cta__inner cta__inner--${slicePathname}`}>
          <h3 className="title-technology-type-1 cta__title">{CTA_TITLE}</h3>
          <PrimaryButton onClick={() => setIsOpen(true)} className={`cta__button cta__button--${pathname.slice(1)}`}>
            {CTA_BUTTON_TEXT}
          </PrimaryButton>
          <div className="cta__image" />
        </div>
      </div>
      {isOpen && <FormTechnologyModal setIsOpen={setIsOpen} />}
    </section>
  );
}
