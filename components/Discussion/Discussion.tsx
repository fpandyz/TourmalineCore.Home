import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import { getMessageFromForm, sendEmail } from '../../common/utils/sendEmail';
import { SectionProps } from '../../types/globals';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useBodyScrollHidden } from '../../common/hooks/useBodyScrollHiden';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import DiscussionList from '../DiscussionList/DiscussionList';

function Discussion({
  animationName,
  ...props
}: SectionProps) {
  const { t } = useTranslation('discussion');

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState('');

  useBodyScrollHidden(isOpen);

  return (
    <section {...props} className="discussion">
      <div
        className="container container--home-page"
        data-aos={animationName}
      >
        <div className="discussion__inner">
          <h3 className="title-type-2 discussion__title">
            {t('title')}
            <span className="discussion__gradient-title">{t('gradientTitleFirst')}</span>
            <span className="discussion__gradient-title">{t('gradientTitleSecond')}</span>
          </h3>

          <PrimaryButton
            className="discussion__button"
            onClick={() => setIsOpen(true)}
          >
            {t('buttonText')}
          </PrimaryButton>
        </div>
      </div>

      {isOpen && (
        <Modal
          maxWidth="1008px"
          title={!isSubmit ? t('modalTitle') : t('modalTitleSuccessful')}
          subtitle={!isSubmit
            ? t('modalSubtitle')
            : `${t('modalSubtitleSuccessfulFirst')} ${email} ${t('modalSubtitleSuccessfulSecond')}`}
          onClose={onClose}
          content={(
            <>
              {!isSubmit && (
                <Form onSubmit={onFormSubmit} />
              )}

              {isSubmit && <DiscussionList />}
            </>
          )}
        />
      )}
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

export default Discussion;
