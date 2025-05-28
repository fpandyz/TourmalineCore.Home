import Image from 'next/image';
import clsx from 'clsx';
import { ProjectCardWithImage } from '../../types';

export function ProjectRedesignCardWithImage({
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
    <li className={clsx('project-redesign-card-with-image', className)}>
      {link ? (
        <a
          className="project-redesign-card-with-image__link"
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
        <div className={`project-redesign-card-with-image__images project-redesign-card-with-image__images--${size.toUpperCase()}`}>
          <Image
            src={imageUrl}
            layout="fill"
            alt=""
          />
        </div>
        <h3 className="project-redesign-card-with-image__title">{title}</h3>
        <p className="project-redesign-card-with-image__description">{description}</p>
      </>
    );
  }
}
