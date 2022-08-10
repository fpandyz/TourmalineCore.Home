import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

function ProcessCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode,
}) {
  return (
    <div className={clsx('process-card', className)}>
      <div className="process-card__image process-card__image--desktop">
        <Image src="/images/skype-yuilya.png" layout="fill" />
      </div>

      <div className="process-card__inner">
        <div className="process-card__header">

          <div className="process-card__image process-card__image--mobile">
            <Image src="/images/skype-yuilya.png" layout="fill" />
          </div>

          <div>
            Yuliya,
            {' '}
            <span className="process-card__time">17:58,</span>
          </div>
        </div>

        {children}

        <div className="process-card__reaction">
          <Image src="/images/fire.png" layout="fill" />
        </div>
      </div>
    </div>
  );
}

export default ProcessCard;
