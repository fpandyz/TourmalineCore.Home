import { useTranslation } from 'next-i18next';
import { Fragment, useCallback } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { SectionProps } from '../../types/globals';

import ProcessCard from './components/ProcessCard/ProcessCard';

type SecondCardType = {
  listTitle: string;
  list: string[];
};

function Process({
  animationName,
  ...props
}: SectionProps) {
  const { t } = useTranslation('process');

  const FirstCard = useCallback(
    () => {
      const firstList: string[] = t('firstCard.list', { returnObjects: true });

      return (
        <ProcessCard
          altHeader={t('firstAltHeader')}
          reactionImg="/images/yes.png"
          time="17:58"
          altReaction={t('firstCard.altReaction')}
          name={t('Yuliya')}
          srcImage="/images/skype-yuilya.png"
          data-aos="fade-right"
          data-aos-delay={100}
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
      );
    },
    [t],
  );

  const SecondCard = useCallback(
    () => {
      const secondCard: SecondCardType[] = t('secondCard', { returnObjects: true });
      const secondCardFooter: string[] = t('secondCardFooter', { returnObjects: true });

      return (
        <ProcessCard
          altHeader={t('secondAltHeader')}
          reactionImg="/images/fire.png"
          altReaction={t('secondCardAlt')}
          time="14:36"
          name={t('Margarita')}
          srcImage="/images/skype-margarita.png"
          data-aos="fade-left"
          data-aos-delay={250}
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
      );
    },
    [t],
  );

  return (
    <section className="process" {...props}>
      <div
        className="container container--home-page"
        data-aos={animationName}
      >
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

        <div
          className="caption process__caption"
          data-aos="fade-up"
          data-aos-delay={0}
          data-aos-anchor-placement="center-bottom"
        >
          {t('caption')}
        </div>
      </div>
    </section>
  );
}

export default Process;
