import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';
import { FormRedesign } from '../FormRedesign/FormRedesign';
import { sendEmail } from '../../../services/emailService/emailService';
import { getMessageFromForm } from '../../../common/utils';

export function FormBlockRedesign({
  initializeIsSubmit = false,
  testId,
}: {
  initializeIsSubmit?: boolean;
  testId?: string;
}) {
  const {
    t,
  } = useTranslation(`formBlockRedesign`);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [email, setEmail] = useState(``);
  const [isSubmit, setIsSubmit] = useState(initializeIsSubmit);

  return (
    <section
      className={clsx(`form-block-redesign`, {
        'form-block-redesign--is-submitted': isSubmit,
      })}
      data-testid={testId}
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
                            href={t(`contactLink`)}
                            className="form-block-redesign__aside-link"
                            target="_blank"
                          >
                            {t(`contactLinkText`)}
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
    const messageSend = getMessageFromForm(formData);

    await sendEmail(messageSend);
    setEmail(messageSend.email);
    setIsSubmit(true);
  }
}
