import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import { getMessageFromForm, sendEmail } from '../../common/utils/sendEmail';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';
import DiscussionList from '../DiscussionList/DiscussionList';

function HeroBlockTechnology({
  title,
  description,
}: {
  title: string,
  description: string,
}) {
  const { t } = useTranslation('discussion');

  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState('');

  const slicePathname = pathname.slice(1);

  useBodyScrollHiden(isOpen);

  return (
    <section className={clsx('hero-block-technology', {
      'hero-block-technology--zh': isChineseLanguage(),
    })}
    >
      <div className="container hero-block-technology__wrapper">
        <div className="hero-block-technology__inner">
          <h3 className="hero-block-technology__title">{title}</h3>
          <div className="hero-block-technology__description">{description}</div>

          <PrimaryButton onClick={() => setIsOpen(true)} className={`hero-block-technology__button hero-block-technology__button--${slicePathname}`}>
            Оставить заявку
          </PrimaryButton>
          {isOpen && (
            <Modal
              maxWidth="1008px"
              title={!isSubmit ? t('modalTitle') : t('modalTitleSuccessful')}
              subtitle={!isSubmit
                ? t('modalSubtitle')
                : `${t('modalSubtitleSuccessfulFirst')} ${email} ${t('modalSubtitleSuccessfulSecond')}`}
              subtitleClassName="hero-block-technology__modal-subtitle"
              content={(
                <>
                  {!isSubmit && (
                    <Form
                      onSubmit={onFormSubmit}
                      buttonClassName={`hero-block-technology__button hero-block-technology__button--modal hero-block-technology__button--${slicePathname}`}
                    />
                  )}
                  {isSubmit && <DiscussionList />}
                </>
              )}
              onClose={onClose}
            />
          )}

        </div>
        <div className={`hero-block-technology__image hero-block-technology__image--${slicePathname}`} />
      </div>
    </section>
  );

  function onClose() {
    setIsOpen(false);
    setIsSubmit(false);
  }

  async function onFormSubmit(formData: FormData) {
    const messageSend = getMessageFromForm(formData);
    await sendEmail(messageSend);

    setEmail(messageSend.email);
    setIsSubmit(true);
  }
}

export default HeroBlockTechnology;
