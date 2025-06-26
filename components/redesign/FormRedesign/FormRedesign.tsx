import { useTranslation } from 'next-i18next';
import { FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InputRedesign } from './components/InputRedesign/InputRedesign';
import { TextareaRedesign } from './components/TextareaRedesign/TextareaRedesign';
import { FileUploadInputRedesign } from './components/FileUploadInputRedesign/FileUploadInputRedesign';

export function FormRedesign() {
  const {
    t,
  } = useTranslation(`formRedesign`);

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
                description={t(`attachFileText`)}
              />
            </div>
            <div className="form-redesign__footer">
              <button
                className="form-redesign__featured-link"
                type="submit"
              >
                {t(`buttonText`)}
              </button>
              <div className="form-redesign__approval">
                {t(`approvalText`)}
                <Link
                  href={t(`approvalLink`)}
                >
                  {t(`approvalLinkText`)}
                </Link>
              </div>
            </div>
          </form>
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
    console.log(event);
  }
}
