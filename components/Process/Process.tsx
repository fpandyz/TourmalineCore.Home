import { useTranslation } from 'next-i18next';
import { Fragment, useCallback } from 'react';
import { Carousel } from 'react-responsive-carousel';

import ProcessCard from './ProcessCard/ProcessCard';

type SecondCardType = {
  listTitle: string;
  list: string[];
};

function Process({
  id,
}: {
  id: string;
}) {
  const { t } = useTranslation('process');

  const firstList: string[] = t('firstCard.list', { returnObjects: true });
  const secondCard: SecondCardType[] = t('secondCard', { returnObjects: true });
  const secondCardFooter: string[] = t('secondCardFooter', { returnObjects: true });

  const FirstCard = useCallback(() => (
    <ProcessCard
      reactionImg="/images/yes.png"
      time="17:58"
      name={t('Yuliya')}
    >
      <div className="process-card__content">

        <div className="process-card__title">{t('firstCard.title')}</div>

        <div>{t('firstCard.listTitle')}</div>
        <ol className="process-card__list">
          {firstList.map((text, index) => (
            <li key={`first-list-${index + 1}`}>{text}</li>
          ))}
        </ol>
      </div>
    </ProcessCard>
  ), [firstList]);

  const SecondCard = useCallback(() => (
    <ProcessCard
      reactionImg="/images/fire.png"
      time="17:58"
      name={t('Yuliya')}
    >
      <div className="process-card__content">
        {secondCard.map((item) => (
          <Fragment key={item.listTitle}>
            <div>{item.listTitle}</div>
            <ol className="process-card__list">
              {item.list.map((text, index) => (
                <li key={`second-card-list-${index + 1}`}>{text}</li>
              ))}
            </ol>
          </Fragment>
        ))}

        {secondCardFooter.map((text, index) => (
          <div key={`second-card-footer-${index + 1}`}>{text}</div>
        ))}
      </div>
    </ProcessCard>
  ), [secondCard, secondCardFooter]);

  return (
    <section id={id} className="section process">
      <div className="container container--home-page">
        <h2 className="title-type-3">{t('title')}</h2>
        <div className="process__subtitle">{t('subtitle')}</div>

        <div className="process__content">
          <FirstCard />
          <SecondCard />
        </div>

        <div
          className="responsive-carousel"
        >
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            preventMovementUntilSwipeScrollTolerance
          >
            <FirstCard />
            <SecondCard />
          </Carousel>
        </div>
        <div className="caption process__caption">{t('caption')}</div>
      </div>
    </section>
  );
}

export default Process;
