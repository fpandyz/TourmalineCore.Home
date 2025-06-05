import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Element } from 'react-scroll';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import Form from '../Form/Form';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

import { SectionProps } from '../../types/globals';
import { getMessageFromForm, sendEmail } from '../../common/utils/sendEmail';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import { AppRoute } from '../../common/utils/consts/app-route';

function FormBlock({
  animationName,
  id,
  buttonClassName,
  ...props
}: SectionProps & {
  buttonClassName?: string;
}) {
  const [email, setEmail] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const { t } = useTranslation('formBlock');
  const { pathname } = useRouter();

  const notMainPage = pathname !== AppRoute.Main;

  return (
    <section
      className={
        clsx(`section container form-block ${notMainPage ? 'container--technology-page' : 'container--home-page'}`, {
          'form-block--zh': isChineseLanguage(),
        })
      }
      id={id}
      {...props}
    >
      <Element name={`scroll-to-${id}`}>
        <div
          className={clsx('form-block__inner', notMainPage && 'form-block__inner--technology')}
        >
          <h2 className={`${notMainPage ? 'title-technology-type-2' : 'title-type-3'} form-block__title`}>
            {t('title')}
            {' '}
            <span className={
              notMainPage
                ? 'title-technology-type-2 form-block__title-technology'
                : 'form-block__title-gradient '
            }
            >
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
