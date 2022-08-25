import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  FormEvent, useMemo, useRef,
} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { DEFAULT_LOCALE } from '../../next-i18next.config';

import ExternalLink from '../ExternalLink/ExternalLink';
import Input from '../Input/Input';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Textarea from '../Textarea/Textarea';

enum ReCAPTCHALanguage {
  'en' = 'en',
  'ru' = 'ru',
  'zh' = 'zh-CN',
}

function Form({
  onSubmit = () => {},
}: {
  onSubmit: (formData: FormData) => unknown;
}) {
  const { t } = useTranslation('form');
  const router = useRouter();

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const routerLocale = useMemo(() => {
    if (!router.locale) {
      return DEFAULT_LOCALE;
    }

    return router.locale;
  }, [router.locale]);

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

      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ''}
        hl={ReCAPTCHALanguage[routerLocale as keyof typeof ReCAPTCHALanguage]}
      />
    </>
  );

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    if (!recaptchaRef.current) {
      return;
    }

    const token = await recaptchaRef.current.executeAsync();

    if (!token) {
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('g-recaptcha-response', token);

    onSubmit(formData);

    recaptchaRef.current.reset();
  }
}

export default Form;
