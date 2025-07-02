import { Trans, useTranslation } from 'next-i18next';
import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { InputRedesign } from './components/InputRedesign/InputRedesign';
import { TextareaRedesign } from './components/TextareaRedesign/TextareaRedesign';
import { Spinner } from '../../Spinner/Spinner';

export function FormRedesign({
  onSubmit = () => {},
  isSubmit,
  setIsSubmit,
} : {
  onSubmit: (formData: FormData) => unknown;
  isSubmit: boolean;
  setIsSubmit: (value: boolean) => void;
}) {
  const {
    t,
  } = useTranslation(`formBlockRedesign`);

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState(``);

  return (
    <form
      className={clsx(`form-redesign`, {
        'form-redesign--is-submitted': isSubmit,
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
      {
        isSubmit
       && (
         <h2 className="form-redesign__title">
           {
             router.locale === `ru`
               ? `Спасибо за заявку!`
               : `Thank you!`
           }
         </h2>
       )
      }
      {
        !isSubmit
       && (
         <h2 className="form-redesign__title">{t(`title`)}</h2>
       )
      }
      {
        isSubmit
          && (
            <p className="form-redesign__description">
              {
                router.locale === `ru`
                  ? `Мы ответим на вашу почту ${email} в течение одного рабочего дня. Если вопрос срочный, смело пишите в`
                  : `We will send a message to your email ${email} within 1 working day. If urgent, please contact us on`
              }

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
              label={
                router.locale === `ru`
                  ? `Имя`
                  : `Name`
              }
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
              label={
                router.locale === `ru`
                  ? `Почта`
                  : `Email`
              }
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
              label={
                router.locale === `ru`
                  ? `Расскажите о вашей задаче`
                  : `Describe your project`
              }
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
              className="form-redesign__featured-link"
              type="button"
              onClick={() => setIsSubmit(false)}
            >
              {
                router.locale === `ru`
                  ? `Заполнить еще раз`
                  : `Write more`
              }
            </button>
          ) : (
            <button
              className="form-redesign__featured-link"
              type="submit"
            >
              {isLoading && <Spinner />}
              {!isLoading && (
                router.locale === `ru`
                  ? `Отправить заявку`
                  : `Send`
              )}
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
                    href={`documents/policy-${router.locale}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                  />,
                }}
              />
            </div>
          )
        }
      </div>
    </form>
  );

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.target as HTMLFormElement);

      onSubmit(formData);
    } finally {
      setIsLoading(false);
    }
  }
}
