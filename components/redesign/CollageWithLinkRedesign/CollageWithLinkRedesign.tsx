import Image from 'next/image';

export function CollageWithLinkRedesign({
  text,
  link,
  imageUrls,
}: {
  text: string;
  link: string;
  imageUrls: string[];
}) {
  return (
    <section
      className="collage-with-link-redesign"
      data-testid="collage-with-link"
    >
      <div className="collage-with-link-redesign__wrapper">
        <a
          href={link}
          className="collage-with-link-redesign__accent-link"
        >
          <span
            className="collage-with-link-redesign__link-box"
            aria-hidden="true"
          >
            ?
          </span>
          <span
            className="collage-with-link-redesign__cta"
          >
            {text}
          </span>
        </a>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={imageUrl}
            className={`collage-with-link-redesign__image collage-with-link-redesign__image--${index + 1}`}
          >
            <Image
              src={imageUrl}
              fill
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}
