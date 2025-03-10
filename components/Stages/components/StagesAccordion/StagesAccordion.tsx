import { useMemo, useState } from 'react';
import clsx from 'clsx';
import usePath from '../../../../common/hooks/usePath';
import useDeviceSize from '../../../../common/hooks/useDeviceSize';

export default function StagesAccordion({
  title,
  description,
  index,
  clickedAccarion,
}:{
  title: string
  description: string
  index: number
  clickedAccarion?: () => unknown;
}) {
  const { slicePathname } = usePath();

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
              className="title-technology-type-3 stages-list__title"
              onClick={() => {
                if (clickedAccarion) {
                  clickedAccarion();
                }
                setIsOpen(!isOpen);
              }}
            >
              {title}
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
