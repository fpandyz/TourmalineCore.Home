import Image from 'next/image';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface ProcessCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  altHeader: string;
  reactionImg: string;
  time: string;
  altReaction: string;
  name: string;
  children: ReactNode;
}

function ProcessCard({
  altHeader,
  reactionImg,
  time,
  altReaction,
  name,
  children,
  ...props
}: ProcessCardProps) {
  return (
    <div
      className="process-card"
      {...props}
    >
      <div className="process-card__image process-card__image--desktop">
        <Image src="/images/skype-yuilya.png" alt={altHeader} layout="fill" />
      </div>

      <div className="process-card__inner">
        <div className="process-card__header">
          <div className="process-card__image process-card__image--mobile">
            <Image src="/images/skype-yuilya.png" alt={altHeader} layout="fill" />
          </div>

          <div>
            {name}
            {', '}
            <span className="process-card__time">{time}</span>
          </div>
        </div>

        {children}

        <div
          className="process-card__reaction"
          data-aos="fade-in"
          data-aos-delay={350}
        >
          <Image src={reactionImg} alt={altReaction} layout="fill" />
        </div>
      </div>

    </div>
  );
}

export default ProcessCard;
