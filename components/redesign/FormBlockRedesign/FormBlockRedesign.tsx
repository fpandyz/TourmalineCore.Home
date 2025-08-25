import clsx from 'clsx';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FormRedesign } from '../FormRedesign/FormRedesign';
import { sendEmail } from '../../../services/emailService/emailService';
import { getMessageFromForm } from '../../../common/utils';
import { MarkdownText } from '../MarkdownText/MarkdownText';
import { useIsRussianCountry } from '../../../common/hooks';

export function FormBlockRedesign({
  initializeIsSubmit = false,
  testId,
  isModal,
  onCloseModal,
  isComponentPage,
}: {
  initializeIsSubmit?: boolean;
  testId?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
  isComponentPage?: boolean;
}) {
  const {
    t,
  } = useTranslation(`formBlockRedesign`);

  const [isSubmit, setIsSubmit] = useState(initializeIsSubmit);

  const isCountryRus = useIsRussianCountry();

  if (!isCountryRus && !isComponentPage) {
    return null;
  }

  return (
    <section
      className={clsx(`form-block-redesign`, {
        'is-modal': isModal,
      })}
      data-testid={testId || `form-block`}
    >
      <div className="form-block-redesign__wrapper container-redesign">
        <div className="form-block-redesign__inner">
          <div className="form-block-redesign__content">
            {
              !isSubmit
                ? (
                  <>
                    <div className="form-block-redesign__form-wrapper">
                      <FormRedesign
                        onSubmit={onFormSubmit}
                        isSubmit={isSubmit}
                        setIsSubmit={setIsSubmit}
                        isModal={isModal}
                        onCloseModal={onCloseModal}
                      />
                    </div>
                    <div className="form-block-redesign__aside">
                      <div className="form-block-redesign__aside-inner container-redesign">
                        <div className="form-block-redesign__aside-img">
                          <Image
                            src="/images/img-aside.png"
                            alt=""
                            fill
                          />
                        </div>
                        <MarkdownText
                          isTargetBlank
                          className="form-block-redesign__aside-text"
                        >
                          {t(`asideText`)}
                        </MarkdownText>
                      </div>
                    </div>
                  </>
                )
                : (
                  <div className="form-block-redesign__form-wrapper">
                    <FormRedesign
                      onSubmit={onFormSubmit}
                      isSubmit={isSubmit}
                      setIsSubmit={setIsSubmit}
                      isModal={isModal}
                      onCloseModal={onCloseModal}
                    />
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </section>
  );

  async function onFormSubmit(formData: FormData) {
    if (!isComponentPage) {
      const messageSend = getMessageFromForm(formData);

      await sendEmail(messageSend);
      setIsSubmit(true);
    }
  }
}
