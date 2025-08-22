import Image from 'next/image';

export function SingleImageRedesign({
  imageUrl,
}:{
  imageUrl: string;
}) {
  return (
    <section
      className="single-image-redesign container-redesign"
      data-testid="single-image"
    >
      <div className="single-image-redesign__container">
        <Image
          src={imageUrl}
          fill
          alt=""
        />
      </div>
    </section>
  );
}
