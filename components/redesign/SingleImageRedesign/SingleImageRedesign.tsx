import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export function SingleImageRedesign() {
  const {
    t,
  } = useTranslation(`singleImageRedesign`);

  return (
    <section
      className="single-image-redesign container-redesign"
      data-testid="single-image"
    >
      <div className="single-image-redesign__container">
        <Image
          src={t(`imageUrl`)}
          fill
          alt=""
        />
      </div>
    </section>
  );
}
