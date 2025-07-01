import { useTranslation } from 'next-i18next';
import {
  ChangeEvent,
  FormEvent,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { InputRedesign } from './components/InputRedesign/InputRedesign';
import { TextareaRedesign } from './components/TextareaRedesign/TextareaRedesign';
import { FileUploadInputRedesign } from './components/FileUploadInputRedesign/FileUploadInputRedesign';
import { MarkdownText } from '../MarkdownText/MarkdownText';
import { DEFAULT_LOCALE } from '../../../common/utils/consts/localization';
import { Spinner } from '../../Spinner/Spinner';

enum ReCAPTCHALanguage {
  'en' = `en`,
  'ru' = `ru`,
  'zh' = `zh-CN`,
}

export function FormRedesign(
  {
    onSubmit = () => {},
  } : {
    onSubmit: (formData: FormData) => unknown;
  },
) {
  const {
    t,
  } = useTranslation(`formRedesign`);
  const router = useRouter();

  const [isFileUpload, setIsFileUpload] = useState<File>();

  const [isLoading, setIsLoading] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const routerLocale = useMemo(() => {
    if (!router.locale) {
      return DEFAULT_LOCALE;
    }

    return router.locale;
  }, [router.locale]);

  return (
    <section
      className="form-redesign"
      data-testid="form"
    >
      <div className="form-redesign__wrapper container-redesign">
        <div className="form-redesign__inner">
          <form
            className="form-redesign__form"
            onSubmit={handleFormSubmit}
          >
            <h2 className="form-redesign__title">{t(`title`)}</h2>
            <p className="form-redesign__description">{t(`description`)}</p>
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

            <div className="form-redesign__file-upload">
              <span>{t(`or`)}</span>
              <FileUploadInputRedesign
                id="file-upload"
                name="file-upload"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setIsFileUpload(e.target.files?.[0])}
                description={isFileUpload?.name || t(`attachFileText`)}
              />
            </div>
            <div className="form-redesign__footer">
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
              <MarkdownText className="form-redesign__consent">
                {t(`markdownText`)}
              </MarkdownText>
            </div>
          </form>

          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ``}
            badge="bottomleft"
            hl={ReCAPTCHALanguage[routerLocale as keyof typeof ReCAPTCHALanguage]}
          />

        </div>
        <div className="form-redesign__aside">
          <div className="form-redesign__aside-inner container-redesign">
            <div className="form-redesign__aside-img">
              <Image
                src="/images/img-aside.png"
                alt=""
                fill
              />
            </div>
            <p className="form-redesign__aside-text">
              {t(`asideText`)}
              <Link
                href={t(`asideLink`)}
                className="form-redesign__aside-link"
              >
                {t(`asideLinkText`)}
              </Link>
            </p>
          </div>
        </div>
      </div>

    </section>
  );

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (!recaptchaRef.current) {
        return;
      }

      const token = await recaptchaRef.current.executeAsync();

      if (!token) {
        return;
      }

      const formData = new FormData(event.target as HTMLFormElement);
      formData.append(`g-recaptcha-response`, token);

      onSubmit(formData);

      recaptchaRef.current.reset();
    } finally {
      setIsLoading(false);
    }
  }
}
