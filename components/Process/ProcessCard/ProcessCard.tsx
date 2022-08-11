import Image from 'next/image';
import { ReactNode } from 'react';

function ProcessCard({
  reactionImg,
  time,
  name,
  children,
}: {
  reactionImg: string;
  time: string;
  name: string;
  children: ReactNode;
}) {
  return (
    <div className="process-card">
      <div className="process-card__image process-card__image--desktop">
        <Image src="/images/skype-yuilya.png" layout="fill" />
      </div>

      <div className="process-card__inner">
        <div className="process-card__header">
          <div className="process-card__image process-card__image--mobile">
            <Image src="/images/skype-yuilya.png" layout="fill" />
          </div>

          <div>
            {name}
            {', '}
            <span className="process-card__time">{time}</span>
          </div>
        </div>

        {children}

        <div className="process-card__reaction">
          <Image src={reactionImg} layout="fill" />
        </div>
      </div>

    </div>
  );
}

export default ProcessCard;
