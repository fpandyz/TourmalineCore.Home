import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from '../Modal/Modal';
import DiscussionList from '../DiscussionList/DiscussionList';
import Form from '../Form/Form';
import { getMessageFromForm, sendEmail } from '../../common/utils/sendEmail';

export default function FormTechnologyModal({
  setIsOpen,
}:{
  setIsOpen: (isOpen: boolean) => void
}) {
  const { t } = useTranslation('discussion');
  const { pathname } = useRouter();

  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Modal
      maxWidth="1008px"
      title={!isSubmit ? t('modalTitle') : t('modalTitleSuccessful')}
      subtitle={!isSubmit
        ? t('modalSubtitle')
        : `${t('modalSubtitleSuccessfulFirst')} ${email} ${t('modalSubtitleSuccessfulSecond')}`}
      subtitleClassName="form-technology-modal__subtitle"
      content={(
        <>
          {!isSubmit && (
            <Form
              onSubmit={onFormSubmit}
              buttonClassName={`form-technology-modal__button form-technology-modal__button--${pathname.slice(1)}`}
            />
          )}
          {isSubmit && <DiscussionList />}
        </>
      )}
      onClose={onClose}
    />
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
