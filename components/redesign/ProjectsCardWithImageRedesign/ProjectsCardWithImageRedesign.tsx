import Image from 'next/image';
import clsx from 'clsx';
import { ProjectCardWithImage } from '../ProjectWithTextBlockRedesign/types';

export function ProjectsCardWithImageRedesign({
  title,
  description,
  imageUrl,
  size,
  link,
  className,
}: ProjectCardWithImage & {
  className?: string;
}) {
  return (
    <li className={clsx('project-card-with-image-redesign', className)}>
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
        <div className={`project-card-with-image-redesign__images project-card-with-image-redesign__images--${size.toUpperCase()}`}>
          <Image
            src={imageUrl}
            layout="fill"
            alt=""
          />
        </div>
        <h3 className="project-card-with-image-redesign__title">{title}</h3>
        <p className="project-card-with-image-redesign__description">{description}</p>
      </>
    );
  }
}
