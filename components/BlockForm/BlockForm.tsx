import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import { sendEmail, SendEmail } from '../../common/utils/fetchSend';
import Form from '../Form/Form';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function BlockForm() {
  const [email, setEmail] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const { t } = useTranslation('blockForm');

  return (
    <section className="section block-form">
      <h2 className="title-type-3 block-form__title">
        {t('title')}
        {' '}
        <span className="block-form__title-gradient">
          {t('titleGradient')}
        </span>
      </h2>
      {
        !isSubmit
          ? (<Form onFormSubmit={onFormSubmit} />)
          : (
            <div>
              <span className="block-form__text">
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

export default BlockForm;
