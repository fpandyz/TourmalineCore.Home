import { Trans, useTranslation } from 'next-i18next';
import {
  ChangeEvent,
  FormEvent,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { SmartCaptcha } from '@yandex/smart-captcha';
import { InputRedesign } from './components/InputRedesign/InputRedesign';
import { TextareaRedesign } from './components/TextareaRedesign/TextareaRedesign';
import { Spinner } from '../../Spinner/Spinner';
import { validateCaptchaToken } from '../../../services/smartCaptchaService/validateCaptchaToken';
import { DEFAULT_LOCALE } from '../../../common/constants';

export function FormRedesign({
  onSubmit,
  isSubmit,
  setIsSubmit,
  isModal,
  onCloseModal,
} : {
  onSubmit: (formData: FormData) => unknown;
  isSubmit: boolean;
  setIsSubmit: (value: boolean) => void;
  isModal?: boolean;
  onCloseModal?: () => void;
}) {
  const {
    t,
  } = useTranslation(`formBlockRedesign`);

  const {
    locale,
  } = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(``);

  const routerLocale = useMemo(() => {
    if (!locale) {
      return DEFAULT_LOCALE;
    }

    return locale;
  }, [locale]);

  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);

  const {
    nameLabel,
    emailLabel,
    description,
    textareaLabel,
    buttonSubmitLabel,
    buttonSubmittedLabel,
    buttonSubmittedLabelModal,
    titleSubmitted,
  } = getTranslations();

  return (
    <form
      className={clsx(`form-redesign`, {
        'form-redesign--is-submitted': isSubmit,
        'is-modal': isModal,
      })}
      onSubmit={handleFormSubmit}
    >
      {
        isSubmit && (
          <div className="form-redesign__img-container">
            <Image
              src={t(`imageUrl`)}
              fill
              alt=""
            />
          </div>
        )
      }
      <h2 className="form-redesign__title">
        {isSubmit ? `${titleSubmitted}` : t(`title`)}
      </h2>
      {
        isSubmit
          && (
            <p className="form-redesign__description">
              {description}
              <Link
                className="form-redesign__contact-link"
                href={t(`contactLink`)}
                target="_blank"
              >
                {t(`contactLinkText`)}
              </Link>
            </p>
          )
      }
      {
        !isSubmit && (
          <p className="form-redesign__description">
            {t(`description`)}
          </p>
        )
      }
      {
        !isSubmit && (
          <>
            <InputRedesign
              id="name"
              name="name"
              className="form-redesign__input"
              label={nameLabel}
              onKeyDown={(e) => {
                if (e.key === `Enter`) {
                  e.preventDefault();
                }
              }}
              required
            />
            <InputRedesign
              id="email"
              name="email"
              className="form-redesign__input"
              label={emailLabel}
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === `Enter`) {
                  e.preventDefault();
                }
              }}
              required
            />
            <TextareaRedesign
              id="message"
              name="message"
              label={textareaLabel}
              className="form-redesign__input"
              description={t(`message.description`)}
            />
          </>
        )
      }
      <div className="form-redesign__footer">
        {
          isSubmit ? (
            <button
              className="form-redesign__featured-button"
              type="button"
              onClick={() => {
                if (isModal) {
                  onCloseModal?.();
                }

                setIsSubmit(false);
              }}
            >
              {isModal ? buttonSubmittedLabelModal : buttonSubmittedLabel}
            </button>
          ) : (
            <button
              className="form-redesign__featured-button"
              type="submit"
            >
              {isLoading ? <Spinner /> : buttonSubmitLabel}
            </button>
          )
        }
        {
          !isSubmit && (
            <div className="form-redesign__consent">
              <Trans
                i18nKey="formBlockRedesign:consentText"
                components={{
                  bolt: <a
                    className="form-redesign__consent-link"
                    href={`/documents/policy-${locale}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={
                      locale === `ru`
                        ? `согласие на обработку персональных данных`
                        : `processing of personal data`
                    }
                  />,
                }}
              />
            </div>
          )
        }
        {showCaptcha && (
          <div className="form-redesign__captcha">
            <SmartCaptcha
              sitekey={process.env.NEXT_PUBLIC_SMARTCAPTCHA_CLIENT_KEY as string}
              language={routerLocale as 'ru' | 'en'}
              onSuccess={handleCaptchaSuccess}
            />
          </div>
        )}
      </div>
    </form>
  );

  function getTranslations() {
    if (locale === `ru`) {
      return {
        nameLabel: `Имя`,
        emailLabel: `Почта`,
        description: `Мы ответим на вашу почту ${email} в течение одного рабочего дня. Если вопрос срочный, смело пишите в`,
        textareaLabel: `Расскажите о вашей задаче`,
        buttonSubmitLabel: `Отправить заявку`,
        buttonSubmittedLabel: `Заполнить еще раз`,
        buttonSubmittedLabelModal: `Вернуться к сайту`,
        titleSubmitted: `Спасибо за заявку!`,
      };
    }

    return {
      nameLabel: `Name`,
      emailLabel: `Email`,
      description: `We will send a message to your email ${email} within 1 working day. If urgent, please contact us on`,
      textareaLabel: `Describe your project`,
      buttonSubmitLabel: `Send`,
      buttonSubmittedLabel: `Write more`,
      buttonSubmittedLabelModal: `Back to the website`,
      titleSubmitted: `Thank you!`,
    };
  }

  async function handleCaptchaSuccess(captchaToken: string) {
    const response = await validateCaptchaToken(captchaToken);

    if (response.status === `ok`) {
      setIsCaptchaVerified(true);
    }

    setShowCaptcha(false);
  }

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (!isCaptchaVerified) {
        setShowCaptcha(true);
        return;
      }

      const formData = new FormData(event.target as HTMLFormElement);

      await onSubmit(formData);

      setIsCaptchaVerified(false);
    } finally {
      setIsLoading(false);
    }
  }
}
