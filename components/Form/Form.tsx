import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  FormEvent, KeyboardEvent, useMemo, useRef,
} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { DEFAULT_LOCALE } from '../../common/utils/consts/localization';

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
          className="form__input"
          label={t('name.label')}
          description={t('name.description')}
          required
        />
        <Input
          id="email"
          name="email"
          className="form__input"
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
          onKeyDown={handleKeyDown}
        />

        <div className="form__footer">
          <PrimaryButton
            type="submit"
            className="form__button"
          >
            {t('buttonText')}
          </PrimaryButton>
          <div className="form__approval">
            {/* {t('approvedText')}
            {' '}
            <ExternalLink href="/">{t('approvedLink')}</ExternalLink> */}
            {generateReCAPTCHAText()}
          </div>
        </div>
      </form>

      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ''}
        badge="bottomleft"
        hl={ReCAPTCHALanguage[routerLocale as keyof typeof ReCAPTCHALanguage]}
      />
    </>
  );

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && event.shiftKey === false) {
      event.preventDefault();

      const buttonSubmit = document.querySelector<HTMLButtonElement>('.form__button');

      if (buttonSubmit) {
        buttonSubmit.click();
      }
    }
  }

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

  function generateReCAPTCHAText() {
    const ReCAPTCHAText = t('recaptchaText', { returnObjects: true });

    return (
      <p>
        {Object.values<string | {
          link: string;
          text: string;
        }>(ReCAPTCHAText).map((value) => {
          if (typeof value === 'object') {
            return (
              <ExternalLink
                key={value.link}
                target="_blank"
                href={value.link}
              >
                {value.text}
              </ExternalLink>
            );
          }

          return ` ${value} `;
        })}
      </p>
    );
  }
}

export default Form;
