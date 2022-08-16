import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import List from '../List/List';
import Modal from '../Modal/Modal';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const email = 'pol’zovatel’@gmail.com';

function Discussion({
  id,
}: {
  id: string;
}) {
  const { t } = useTranslation('discussion');

  const dataList: string[] = t('steps', { returnObjects: true });

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <section id={id} className="section discussion">
      <div className="discussion__wrapper">
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
          onClick={() => setIsOpen(false)}
          content={(
            <>
              {isSubmit && (
                <div>Form</div>
              )}

              {!isSubmit && (
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
}

export default Discussion;
