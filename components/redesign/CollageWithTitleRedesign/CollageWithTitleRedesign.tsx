import Image from 'next/image';

export function CollageWithTitleRedesign({
  title,
  imageUrls,
}: {
  title: string;
  imageUrls: string[];
}) {
  return (
    <section
      className="collage-with-title-redesign"
      data-testid="collage-with-title"
    >
      <div className="collage-with-title-redesign__wrapper">
        <h2 className="container-redesign collage-with-title-redesign__title">{title}</h2>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={imageUrl}
            className={`collage-with-title-redesign__image collage-with-title-redesign__image--${index + 1}`}
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
