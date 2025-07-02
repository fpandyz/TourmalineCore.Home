import { useTranslation } from 'next-i18next';
import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { InputRedesign } from './components/InputRedesign/InputRedesign';
import { TextareaRedesign } from './components/TextareaRedesign/TextareaRedesign';
import { MarkdownText } from '../MarkdownText/MarkdownText';
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
      <h2 className="form-redesign__title">{isSubmit ? `Спасибо за заявку!` : t(`title`)}</h2>
      {
        isSubmit
          ? (
            <p className="form-redesign__description">
              Мы ответим на вашу почту
              {` `}
              {email}
              {` `}
              в течение одного рабочего дня. Если вопрос срочный, смело пишите в
              <Link
                className="form-redesign__contact-link"
                href={t(`contanctLink`)}
                target="_blank"
              >
                {t(`contanctLinkText`)}
              </Link>
            </p>
          )
          : (
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
              label={t(`nameInputPlaceholder`)}
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
              label={t(`emailInputPlaceholder`)}
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
              label={t(`textareaPlaceholder`)}
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
              Заполнить еще раз
            </button>

          ) : (
            <button
              className="form-redesign__featured-link"
              type="submit"
            >
              {
                isLoading
                  ? <Spinner />
                  : t(`buttonText`)
              }
            </button>
          )
        }
        {
          !isSubmit && (
            <MarkdownText className="form-redesign__consent">
              {t(`markdownText`)}
            </MarkdownText>
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
