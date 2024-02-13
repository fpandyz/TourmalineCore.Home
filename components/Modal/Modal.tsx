import {
  ReactNode, useEffect, useRef,
} from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import IconCross from '../../icons/cross.svg';
import { useOnClickOutside } from '../../common/hooks/useOnClickOutside';
import { AppRoute } from '../../common/utils/consts/app-route';

function Modal({
  title,
  subtitle,
  subtitleClassName,
  maxWidth = '',
  content,
  onClose = () => {},
}: {
  title?: string;
  subtitle?: string;
  subtitleClassName?: string,
  maxWidth?: string;
  content: ReactNode;
  onClose?:() => unknown;
}) {
  useEffect(() => {
    function escFunction(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  const refModal = useRef<HTMLDivElement>(null);
  const { pathname } = useRouter();

  useOnClickOutside(refModal, onClose);

  return (
    <div className="default-scroll modal">
      <div
        className="container modal__container"
        style={{
          maxWidth,
        }}
      >
        <div
          className={clsx('modal__inner', pathname !== AppRoute.Main && 'modal__inner--technology')}
          ref={refModal}
        >
          <div className="modal__header">
            {title && (<div className="title-type-3 modal__title">{title}</div>)}

            {subtitle && (
              <div className={clsx('modal__subtitle', subtitleClassName)}>
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
  );
}

export default Modal;
