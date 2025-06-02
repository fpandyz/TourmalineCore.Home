import { useTranslation } from 'next-i18next';
import { CardWithImage, CardWithImageRedesign } from '../CardWithImageRedesign/CardWithImageRedesign';
import { CardWithRepositories, CardWithRepositoriesRedesign } from '../CardWithRepositoriesRedesign/CardWithRepositoriesRedesign';
import { CardWithTextAndDate, CardWithTextAndDateRedesign } from '../CardWithTextAndDateRedesign/CardWithTextAndDateRedesign';

export function CardsGridRedesign() {
  const { t } = useTranslation('cardsGridRedesign');

  const cardWithImage: CardWithImage = t('cardWithImage', { returnObjects: true });
  const cardWithRepositories: CardWithRepositories = t('cardWithRepositories', { returnObjects: true });
  const cardWithTextAndDate: CardWithTextAndDate = t('cardWithTextAndDate', { returnObjects: true });

  return (
    <section className="cards-grid-redesign">
      <div className="container-redesign cards-grid-redesign__wrapper">
        <ul className="cards-grid-redesign__cards grid">
          <li className="cards-grid-redesign__card-item col-desktop-4 col-mobile-12">
            <CardWithImageRedesign
              className="cards-grid-redesign__card-with-image"
              title={cardWithImage.title}
              markdownText={cardWithImage.markdownText}
              imageUrl={cardWithImage.imageUrl}
            />
          </li>
          <li className="cards-grid-redesign__card-item col-desktop-4 col-mobile-12">
            <CardWithRepositoriesRedesign
              className="cards-grid-redesign__card-with-repositories"
              title={cardWithRepositories.title}
              markdownText={cardWithRepositories.markdownText}
              repositories={cardWithRepositories.repositories}
            />
          </li>
          <li className="cards-grid-redesign__card-item col-desktop-4 col-mobile-12">
            <CardWithTextAndDateRedesign
              className="cards-grid-redesign__card-with-text-and-date"
              title={cardWithTextAndDate.title}
              text={cardWithTextAndDate.text}
              date={cardWithTextAndDate.date}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
