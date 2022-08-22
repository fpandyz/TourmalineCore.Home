import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { sendEmail } from '../../common/utils/fetchSend';
import { SectionProps } from '../../types/globals';

import Form from '../Form/Form';
import List from '../List/List';
import Modal from '../Modal/Modal';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function Discussion({
  ...props
}: SectionProps) {
  const { t } = useTranslation('discussion');

  const dataList: string[] = t('steps', { returnObjects: true });

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <section {...props} className="discussion">
      <div className="container container--home-page">
        <div className="discussion__inner">
          <h3 className="title-type-2 discussion__title">
            {t('title')}
            <div className="discussion__gradients">
              <span>{t('gradientTitleFirst')}</span>
              <span>{t('gradientTitleSecond')}</span>
            </div>
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
          onClick={() => setIsOpen(false)}
          content={(
            <>
              {!isSubmit && (
                <Form onSubmit={onFormSubmit} />
              )}

              {isSubmit && (
                <>
                  <div className="title-type-4 discussion__list-title">{t('modalListTitle')}</div>
                  <List steps={dataList} />
                </>
              )}
            </>
          )}
        />
      )}

    </section>
  );

  async function onFormSubmit(formData: FormData) {
    const messageSend: {
      [key: string]: string
    } = Array
      .from(formData)
      .reduce((message, [key, value]) => ({
        ...message,
        [key]: value,
      }), {});

    await sendEmail(messageSend);
    setEmail(messageSend.email);
    setIsSubmit(true);
  }
}

export default Discussion;
