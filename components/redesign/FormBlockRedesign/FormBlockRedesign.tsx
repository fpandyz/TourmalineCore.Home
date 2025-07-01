import { useState } from 'react';
import Image from 'next/image';
import { FormRedesign } from '../FormRedesign/FormRedesign';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export function FormBlockRedesign() {
  const {
    t,
  } = useTranslation(`formRedesign`);

  const [email, setEmail] = useState(``);
  const [isSubmit, setIsSubmit] = useState(true);

  return (
    <section
      className="form-block-redesign"
      data-testid="form"
    >
      <div className="form-block-redesign__wrapper container-redesign">
        <div className="form-block-redesign__inner">
          <div className="form-block-redesign__content">
            {
              !isSubmit
                ? (
                  <>
                    <FormRedesign
                      onSubmit={onFormSubmit}
                      isSubmit={isSubmit}
                      setIsSubmit={setIsSubmit}
                    />
                    <div className="form-block-redesign__aside">
                      <div className="form-block-redesign__aside-inner container-redesign">
                        <div className="form-block-redesign__aside-img">
                          <Image
                            src="/images/img-aside.png"
                            alt=""
                            fill
                          />
                        </div>
                        <p className="form-block-redesign__aside-text">
                          {t(`asideText`)}
                          <Link
                            href={t(`asideLink`)}
                            className="form-block-redesign__aside-link"
                          >
                            {t(`asideLinkText`)}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </>
                )
                : (
                  <FormRedesign
                    onSubmit={onFormSubmit}
                    isSubmit={isSubmit}
                    setIsSubmit={setIsSubmit}
                  />
                )
              }
            </div>
          </div>
        </div>
    </section>
  );

  async function onFormSubmit(formData: FormData) {
    // const messageSend = getMessageFromForm(formData);

    // await sendEmail(messageSend);
    // setEmail(messageSend.email);
    setIsSubmit(true);
  }
}
