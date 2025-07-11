import Image from 'next/image';
import clsx from 'clsx';

export type ProjectCardWithImage = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  isNda?: boolean;
  size: 'L' | 'M' | 'S' | 'XS';
};

export function ProjectsCardWithImageRedesign({
  title,
  description,
  imageUrl,
  size,
  link,
  isNda,
  className,
}: ProjectCardWithImage & {
  className?: string;
}) {
  return (
    <li className={clsx(`project-card-with-image-redesign`, className)}>
      {link ? (
        <a
          className="project-card-with-image-redesign__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {renderCardContent()}
        </a>
      )
        : renderCardContent()}
    </li>
  );

  function renderCardContent() {
    return (
      <>
        <div className="project-card-with-image-redesign__content">
          <h3 className="project-card-with-image-redesign__title">{title}</h3>
          <p className="project-card-with-image-redesign__description">{description}</p>
        </div>
        <div className={`project-card-with-image-redesign__images project-card-with-image-redesign__images--${size.toUpperCase()}`}>
          {isNda && <span className="project-card-with-image-redesign__nda">NDA</span>}
          <Image
            src={imageUrl}
            fill
            alt=""
          />
        </div>
      </>
    );
  }
}
