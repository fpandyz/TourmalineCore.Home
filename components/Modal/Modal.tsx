import { ReactNode, useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import IconCross from '../../icons/cross.svg';
import { AppRoute } from '../../common/enums';
import { useOnClickOutside } from '../../common/hooks';

export function Modal({
  title,
  subtitle,
  subtitleClassName,
  maxWidth = ``,
  content,
  onClose = () => {},
}: {
  title?: string;
  subtitle?: string;
  subtitleClassName?: string;
  maxWidth?: string;
  content: ReactNode;
  onClose?:() => unknown;
}) {
  useEffect(() => {
    function escFunction(event: KeyboardEvent) {
      if (event.key === `Escape`) {
        onClose();
      }
    }

    document.addEventListener(`keydown`, escFunction, false);

    return () => {
      document.removeEventListener(`keydown`, escFunction, false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refModal = useRef<HTMLDivElement>(null);
  const {
    pathname,
  } = useRouter();

  useOnClickOutside(refModal, onClose);

  return (
    <FocusLock
      returnFocus
    >
      <div className="default-scroll modal">
        <div
          className="container modal__container"
          style={{
            maxWidth,
          }}
        >
          <div
            className={clsx(`modal__inner`, pathname !== AppRoute.Main && `modal__inner--technology`)}
            ref={refModal}
          >
            <div className="modal__header">
              {title && (<div className="title-type-3 modal__title">{title}</div>)}

              {subtitle && (
                <div className={clsx(`modal__subtitle`, subtitleClassName)}>
                  {subtitle}
                </div>
              )}

              <button
                type="button"
                className="modal__cross"
                onClick={onClose}
              >
                <IconCross />
              </button>
            </div>

            <div className="modal__content">{content}</div>
          </div>
        </div>
      </div>
    </FocusLock>
  );
}
