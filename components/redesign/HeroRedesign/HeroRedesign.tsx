import { ImageSlider } from '../ImageSlider/ImageSlider';

export function HeroRedesign({
  title,
  description,
  imageUrls,
}: {
  title: string;
  description: string;
  imageUrls: string[];
}) {
  return (
    <section
      className="hero-redesign"
      data-testid="hero"
    >
      <div className="container-redesign hero-redesign__wrapper">
        <h1 className="hero-redesign__title">{title}</h1>
        <p className="hero-redesign__description">{description}</p>
        <div className="hero-redesign__images">
          <ImageSlider
            imageUrls={imageUrls}
            fill
            interval={1600}
            priority
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
