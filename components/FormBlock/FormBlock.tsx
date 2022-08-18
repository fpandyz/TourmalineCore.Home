import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import { sendEmail, SendEmail } from '../../common/utils/fetchSend';
import Form from '../Form/Form';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function FormBlock() {
  const [email, setEmail] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const { t } = useTranslation('formBlock');

  return (
    <section className="section form-block">
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
    </section>
  );

  async function onFormSubmit(formEvent: FormData) {
    const messageSend: SendEmail = {
      name: '',
      email: '',
      message: '',
    };

    Object.keys(messageSend).forEach((key) => {
      const value = formEvent.get(key);
      if (value) {
        messageSend[key as keyof SendEmail] = value.toString();
      }
    });

    if (!messageSend.message.length) {
      messageSend.message = 'empty';
    }

    sendEmail(messageSend);
    setEmail(messageSend.email);
    setIsSubmit(true);
  }
}

export default FormBlock;
