import { useTranslation } from 'next-i18next';
// import { useRouter } from 'next/router';
import {
  FormEvent,
  //  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';

import ExternalLink from '../ExternalLink/ExternalLink';
import Input from '../Input/Input';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Textarea from '../Textarea/Textarea';

// enum ReCAPTCHALanguage {
//   'en' = 'en',
//   'ru' = 'ru',
//   'zh' = 'zh-CN',
// }

function Form({
  onSubmit = () => {},
}: {
  onSubmit: (formEvent: FormData) => unknown;
}) {
  const { t } = useTranslation('form');
  // const router = useRouter();

  // const recaptchaRef = useRef<ReCAPTCHA>(null);

  // const routerLocale = useMemo(() => {
  //   if (!router.locale) {
  //     return 'en';
  //   }

  //   return router.locale;
  // }, [router.locale]);

  // useEffect(() => {
  //   // console.log(recaptchaRef);
  //   console.log(recaptchaRef.current);

  //   // window.recaptchaOptions = {
  //   //   lang: ReCAPTCHALanguage[routerLocale as keyof typeof ReCAPTCHALanguage],
  //   // };
  //   // console.log(window.recaptchaOptions);
  // }, [routerLocale]);

  return (
    <>
      <form
        className="form"
        onSubmit={handleFormSubmit}
      >
        <Input
          id="name"
          name="name"
          label={t('name.label')}
          description={t('name.description')}
          required
        />
        <Input
          id="email"
          name="email"
          label={t('email.label')}
          description={t('email.description')}
          type="email"
          required
        />
        <Textarea
          id="message"
          name="message"
          label={t('message.label')}
          className="form__message"
          description={t('message.description')}
        />

        <div className="form__footer">
          <PrimaryButton
            type="submit"
            className="form__button"
          >
            {t('buttonText')}
          </PrimaryButton>
          <div className="form__approval">
            {t('approvedText')}
            {' '}
            <ExternalLink className="form__link" href="/">{t('approvedLink')}</ExternalLink>
          </div>
        </div>
      </form>

      {/* <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ''}
        badge="bottomright"
        hl={ReCAPTCHALanguage[routerLocale as keyof typeof ReCAPTCHALanguage]}
      /> */}
    </>
  );

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // if (!recaptchaRef.current) {
    //   return;
    // }
    // console.log('Here1', !recaptchaRef.current);

    // const token = await recaptchaRef.current.executeAsync();

    // console.log('Here2');

    // console.log(token);

    // const response = await fetch(
    //   `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    //   {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    //     },
    //     method: 'POST',
    //   },
    // );

    // console.log('response =', response);

    // if (!token) {
    //   return;
    // }

    const formEvent = new FormData(event.target as HTMLFormElement);
    // formEvent.append('recaptchatoken', token || '');

    onSubmit(formEvent);

    // recaptchaRef.current.reset();
  }
}

export default Form;
