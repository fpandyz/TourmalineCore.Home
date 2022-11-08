import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Element } from 'react-scroll';

import clsx from 'clsx';
import Form from '../Form/Form';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

import { SectionProps } from '../../types/globals';
import { getMessageFromForm, sendEmail } from '../../common/utils/sendEmail';
import isChineseLanguage from '../../common/utils/isChineseLanguage';

function FormBlock({
  animationName,
  id,
  ...props
}: SectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const { t } = useTranslation('formBlock');

  return (
    <section
      className={clsx('section container container--home-page form-block', {
        'form-block--zh': isChineseLanguage(),
      })}
      id={id}
      {...props}
    >
      <Element name={`scroll-to-${id}`}>
        <div
          className="form-block__inner"
          data-aos={animationName}
        >
          <h2 className="title-type-3 form-block__title">
            {t('title')}
            {' '}
            <span className="form-block__title-gradient">
              {t('titleGradient')}
            </span>
          </h2>
          {
            !isSubmit
              ? (<Form onSubmit={onFormSubmit} />)
              : (
                <div>
                  <span className="form-block__text">
                    {t('text')}
                    {' '}
                    {email}
                  </span>
                  <PrimaryButton onClick={() => setIsSubmit(false)}>{t('buttonText')}</PrimaryButton>
                </div>
              )
          }
        </div>
      </Element>
    </section>
  );

  async function onFormSubmit(formData: FormData) {
    const messageSend = getMessageFromForm(formData);

    await sendEmail(messageSend);
    setEmail(messageSend.email);
    setIsSubmit(true);
  }
}

export default FormBlock;
