import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Discussions } from '../Discussions/Discussions';
import { Form } from '../Form/Form';
import { usePath } from '../../common/hooks';
import { getMessageFromForm } from '../../common/utils';
import { sendEmail } from '../../services/emailService/emailService';

export function FormTechnologyModal({
  setIsOpen,
}:{
  setIsOpen: (isOpen: boolean) => void;
}) {
  const {
    t,
  } = useTranslation(`discussion`);
  const {
    slicePathname,
  } = usePath();

  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState(``);

  return (
    <Modal
      maxWidth="1008px"
      title={!isSubmit ? t(`modalTitle`) : t(`modalTitleSuccessful`)}
      subtitle={!isSubmit
        ? t(`modalSubtitle`)
        : `${t(`modalSubtitleSuccessfulFirst`)} ${email} ${t(`modalSubtitleSuccessfulSecond`)}`}
      subtitleClassName="form-technology-modal__subtitle"
      content={(
        <>
          {!isSubmit && (
            <Form
              onSubmit={onFormSubmit}
              buttonClassName={`form-technology-modal__button form-technology-modal__button--${slicePathname}`}
            />
          )}
          {isSubmit && <Discussions />}
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
