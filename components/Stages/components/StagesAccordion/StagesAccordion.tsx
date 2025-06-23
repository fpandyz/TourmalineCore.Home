import { useMemo, useState } from 'react';
import clsx from 'clsx';
import { usePath } from '../../../../common/hooks/usePath';
import { useDeviceSize } from '../../../../common/hooks/useDeviceSize';
import IconLargeArrow from '../../../../icons/icon-large-arrow.svg';

export function StagesAccordion({
  title,
  description,
  index,
  clickedAccordion,
}:{
  title: string;
  description: string;
  index: number;
  clickedAccordion?: () => unknown;
}) {
  const {
    slicePathname,
  } = usePath();

  const [isOpen, setIsOpen] = useState(false);

  const deviceSize = useDeviceSize();
  const isMobile = useMemo(() => deviceSize.width < 768, [deviceSize.width]);

  return (
    <li
      key={title}
      className="stages-list__item"
    >
      <div className={`stages-list__number stages-list__number--${slicePathname}`}>{index + 1}</div>
      <div className="stages-list__inner">
        {
          isMobile ? (
            <button
              type="button"
              className="title-technology-type-3 stages-list__title stages-list__title--trigger"
              onClick={() => {
                if (clickedAccordion) {
                  clickedAccordion();
                }
                setIsOpen(!isOpen);
              }}
            >
              {title}
              <IconLargeArrow className={clsx(`stages-list__accordion-icon`, {
                'stages-list__accordion-icon--is-open': isOpen,
              })}
              />
            </button>
          )
            : (
              <span className="title-technology-type-3 stages-list__title">{title}</span>
            )
        }
        <span
          className={clsx(`stages-list__description stages-list__description--${slicePathname}`, {
            'stages-list__description--is-open': isMobile && isOpen,
          })}
        >
          {description}
        </span>
      </div>
    </li>
  );
}
