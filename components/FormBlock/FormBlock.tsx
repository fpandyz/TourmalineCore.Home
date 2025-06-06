import { useTranslation } from 'next-i18next';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';

import clsx from 'clsx';
import { Form } from '../Form/Form';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { getMessageFromForm, sendEmail } from '../../common/utils/sendEmail';
import { isChineseLanguage } from '../../common/utils/isChineseLanguage';

export function FormBlock({
  id,
  buttonClassName,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  buttonClassName?: string;
}) {
  const [email, setEmail] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const { t } = useTranslation('formBlock');

  return (
    <section
      className={
        clsx('section container form-block', {
          'form-block--zh': isChineseLanguage(),
        })
      }
      id={id}
      {...props}
    >
      <div
        className={clsx('form-block__inner')}
      >
        <h2 className="title-technology-type-2 form-block__title">
          {t('title')}
          {' '}
          <span className="title-technology-type-2 form-block__title-technology">
            {t('titleGradient')}
          </span>
        </h2>
        {
          !isSubmit
            ? (
              <Form
                onSubmit={onFormSubmit}
                buttonClassName={buttonClassName}
              />
            )
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
