import { useTranslation } from 'next-i18next';
import { CardWithImage, CardWithImageRedesign } from '../CardWithImageRedesign/CardWithImageRedesign';

export function CardsGridRedesign() {
  const { t } = useTranslation('cardsGridRedesign');

  const cardWithImage: CardWithImage = t('cardWithImage', { returnObjects: true });

  return (
    <section className="cards-grid-redesign">
      <div className="container-redesign cards-grid-redesign__wrapper">
        <ul className="cards-grid-redesign__cards grid">
          <li className="cards-grid-redesign__card-item col-desktop-4">
            <CardWithImageRedesign
              className="cards-grid-redesign__card-with-image"
              title={cardWithImage.title}
              markdownText={cardWithImage.markdownText}
              imageUrl={cardWithImage.imageUrl}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
