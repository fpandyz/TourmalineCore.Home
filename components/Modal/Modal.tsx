import {
  ReactNode, useEffect, useRef,
} from 'react';

import IconCross from '../../icons/cross.svg';
import { useOnClickOutside } from '../../common/hooks/useOnClickOutside';

function Modal({
  title,
  subtitle,
  maxWidth = '',
  content,
  onClose = () => {},
}: {
  title?: string;
  subtitle?: string;
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
          className="modal__inner"
          ref={refModal}
        >
          <div className="modal__header">
            {title && (<div className="title-type-3 modal__title">{title}</div>)}

            {subtitle && (<div className="modal__subtitle">{subtitle}</div>)}

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
