import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Modal from '../Modal/Modal';
import { getMessageFromForm, sendEmail } from '../../common/utils/sendEmail';
import DiscussionList from '../DiscussionList/DiscussionList';
import Form from '../Form/Form';

const CTA_TITLE = 'Расскажите нам о своей задаче';
const CTA_BUTTON_TEXT = 'Обсудить проект';

export default function Cta() {
  const { t } = useTranslation('discussion');
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState('');
  const slicePathname = pathname.slice(1);

  useBodyScrollHiden(isOpen);

  return (
    <section className="cta">
      <div className="container cta__wrapper">
        <div className={`cta__inner cta__inner--${slicePathname}`}>
          <h3 className="title-technology cta__title">{CTA_TITLE}</h3>
          <PrimaryButton onClick={() => setIsOpen(true)} className={`cta__button cta__button--${pathname.slice(1)}`}>
            {CTA_BUTTON_TEXT}
          </PrimaryButton>
          <div className={`cta__image cta__image--${slicePathname}`} />
        </div>
      </div>
      {isOpen && (
        <Modal
          maxWidth="1008px"
          title={!isSubmit ? t('modalTitle') : t('modalTitleSuccessful')}
          subtitle={!isSubmit
            ? t('modalSubtitle')
            : `${t('modalSubtitleSuccessfulFirst')} ${email} ${t('modalSubtitleSuccessfulSecond')}`}
          subtitleClassName="cta__modal-subtitle"
          content={(
            <>
              {!isSubmit && (
                <Form
                  onSubmit={onFormSubmit}
                  buttonClassName={`cta__button cta__button--modal cta__button--${slicePathname}`}
                />
              )}
              {isSubmit && <DiscussionList />}
            </>
          )}
          onClose={onClose}
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
