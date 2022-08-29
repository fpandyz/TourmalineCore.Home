import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { getMessageFromForm, sendEmail } from '../../common/utils/sendEmail';

import Form from '../Form/Form';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { SectionProps } from '../../types/globals';

function FormBlock({
  animationName,
  ...props
}: SectionProps) {
  const [email, setEmail] = useState('123');
  const [isSubmit, setIsSubmit] = useState(true);

  const { t } = useTranslation('formBlock');

  return (
    <section
      className="section container container--home-page form-block"
      {...props}
    >
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
