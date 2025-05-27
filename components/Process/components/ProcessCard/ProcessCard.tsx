import clsx from 'clsx';
import Image from 'next/image';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import isChineseLanguage from '../../../../common/utils/isChineseLanguage';

interface ProcessCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  altHeader: string;
  reactionImg: string;
  time: string;
  altReaction: string;
  name: string;
  children: ReactNode;
  srcImage: string;
}

function ProcessCard({
  altHeader,
  reactionImg,
  time,
  altReaction,
  name,
  children,
  srcImage,
  ...props
}: ProcessCardProps) {
  return (
    <div
      className={clsx('process-card', {
        'process-card--zh': isChineseLanguage(),
      })}
      {...props}
    >
      <div className="process-card__image process-card__image--desktop">
        <Image
          src={srcImage}
          alt={altHeader}
          fill
          loading="lazy"
        />
      </div>

      <div className="process-card__inner">
        <div className="process-card__header">
          <div className="process-card__image process-card__image--mobile">
            <Image
              src={srcImage}
              alt={altHeader}
              fill
              loading="lazy"
            />
          </div>

          <div>
            <span className="process-card__name">{name}</span>
            {' '}
            <span className="process-card__time">{time}</span>
          </div>
        </div>

        {children}

        <div
          className="process-card__reaction"
          data-aos="fade-in"
          data-aos-delay={350}
        >
          <Image
            src={reactionImg}
            alt={altReaction}
            fill
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default ProcessCard;
