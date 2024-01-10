import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import isChineseLanguage from '../../common/utils/isChineseLanguage';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import { getMessageFromForm, sendEmail } from '../../common/utils/sendEmail';
import List from '../List/List';
import { useBodyScrollHiden } from '../../common/hooks/useBodyScrollHiden';

function HeroBlockTechnology({
  title,
  description,
}: {
  title: string,
  description: string,
}) {
  const { t } = useTranslation('discussion');

  const dataList: string[] = t('steps', { returnObjects: true });

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
              subtitleClassName="modal__subtitle--technology"
              content={(
                <>
                  {!isSubmit && (
                    <Form onSubmit={onFormSubmit} buttonClassName={`hero-block-technology__button hero-block-technology__button--${slicePathname}`} />
                  )}
                  {isSubmit && (
                    <div className="discussion__list">
                      <div className="title-type-4 discussion__list-title">{t('modalListTitle')}</div>
                      <List steps={dataList} />
                    </div>
                  )}
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
